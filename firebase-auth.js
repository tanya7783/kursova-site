import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  reload,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { firebaseConfig, firebaseConfigReady } from "./firebase-config.js";

const state = {
  auth: null,
  user: null
};

function getModal() {
  return document.getElementById("authModal");
}

function getAuthContent() {
  return getModal()?.querySelector(".auth-content") ?? null;
}

function getEmailInput() {
  return getModal()?.querySelector('input[type="email"]') ?? null;
}

function getPasswordInput() {
  return getModal()?.querySelector('input[type="password"]') ?? null;
}

function closeAuthModal() {
  const modal = getModal();
  if (modal) {
    modal.style.display = "none";
  }
}

function openAuthModal() {
  ensureAuthUi();
  const modal = getModal();
  if (modal) {
    modal.style.display = "block";
  }
}

function getMessageBox() {
  ensureAuthUi();
  return document.getElementById("authStatusMessage");
}

function setMessage(text, tone = "info") {
  const box = getMessageBox();
  if (!box) {
    if (text) {
      alert(text);
    }
    return;
  }

  const palette = {
    info: { bg: "#f3f0ff", color: "#4c3fb1" },
    success: { bg: "#e8fff7", color: "#008763" },
    warn: { bg: "#fff8e6", color: "#9a6700" },
    error: { bg: "#ffeaea", color: "#b42318" }
  };

  const current = palette[tone] || palette.info;
  box.textContent = text;
  box.style.display = text ? "block" : "block";
  box.style.background = current.bg;
  box.style.color = current.color;
}

function shortLabel(user) {
  if (!user?.email) {
    return "Увійти";
  }

  if (!user.emailVerified) {
    return "Підтвердьте email";
  }

  return user.email;
}

function updateLoginButtons() {
  document.querySelectorAll(".btn-login").forEach((button) => {
    button.textContent = shortLabel(state.user);
    if (state.user) {
      button.style.background = "white";
      button.style.color = "var(--primary)";
      button.style.borderColor = "var(--primary)";
    } else {
      button.style.background = "";
      button.style.color = "";
      button.style.borderColor = "";
    }
  });
}

function mapAuthError(error) {
  switch (error?.code) {
    case "auth/email-already-in-use":
      return "Ця пошта вже зареєстрована. Просто увійдіть у свій акаунт.";
    case "auth/invalid-email":
      return "Вкажіть правильну електронну пошту.";
    case "auth/weak-password":
      return "Пароль має містити мінімум 6 символів.";
    case "auth/invalid-credential":
    case "auth/wrong-password":
    case "auth/user-not-found":
      return "Невірна пошта або пароль.";
    case "auth/too-many-requests":
      return "Забагато спроб. Спробуйте трохи пізніше.";
    default:
      return error?.message || "Сталася помилка авторизації.";
  }
}

function validateFields() {
  const email = getEmailInput()?.value.trim().toLowerCase() ?? "";
  const password = getPasswordInput()?.value ?? "";

  if (!email) {
    setMessage("Введіть електронну пошту.", "warn");
    return null;
  }

  if (!password) {
    setMessage("Введіть пароль.", "warn");
    return null;
  }

  return { email, password };
}

function ensureAuthUi() {
  const content = getAuthContent();
  if (!content || content.querySelector("[data-auth-ready='true']")) {
    return;
  }

  content.dataset.authReady = "true";

  content.querySelectorAll(".auth-btn").forEach((button) => {
    button.onclick = () => {
      openAuthModal();
      setMessage("Зараз доступний вхід через email і пароль.", "info");
    };
  });

  const nativeSubmit = Array.from(content.querySelectorAll("button")).find((button) => {
    return button.textContent.trim() === "Увійти" && !button.classList.contains("btn-login");
  });

  if (nativeSubmit) {
    nativeSubmit.style.display = "none";
  }

  const helperLink = content.querySelector("a[href='#']");
  if (helperLink) {
    helperLink.addEventListener("click", async (event) => {
      event.preventDefault();
      await registerWithEmail();
    });
  }

  const controls = document.createElement("div");
  controls.style.display = "grid";
  controls.style.gap = "10px";
  controls.style.marginTop = "10px";
  controls.innerHTML = `
    <button type="button" id="authLoginBtn" style="width:100%;border:none;background:var(--primary);color:#fff;padding:12px;border-radius:10px;cursor:pointer;font-weight:bold;">Увійти</button>
    <button type="button" id="authRegisterBtn" style="width:100%;border:1px solid var(--primary);background:#fff;color:var(--primary);padding:12px;border-radius:10px;cursor:pointer;font-weight:bold;">Зареєструватися</button>
    <button type="button" id="authResendBtn" style="display:none;width:100%;border:1px solid #ddd;background:#fff;color:#444;padding:12px;border-radius:10px;cursor:pointer;font-weight:bold;">Надіслати лист ще раз</button>
    <button type="button" id="authLogoutBtn" style="display:none;width:100%;border:1px solid #ddd;background:#fff;color:#444;padding:12px;border-radius:10px;cursor:pointer;font-weight:bold;">Вийти з акаунта</button>
    <div id="authStatusMessage" style="display:none;padding:12px;border-radius:12px;font-size:14px;line-height:1.5;"></div>
  `;

  content.appendChild(controls);

  document.getElementById("authLoginBtn")?.addEventListener("click", loginWithEmail);
  document.getElementById("authRegisterBtn")?.addEventListener("click", registerWithEmail);
  document.getElementById("authResendBtn")?.addEventListener("click", resendVerification);
  document.getElementById("authLogoutBtn")?.addEventListener("click", logoutUser);
}

async function registerWithEmail() {
  if (!firebaseConfigReady || !state.auth) {
    setMessage("Firebase ще не підключений.", "warn");
    return;
  }

  const credentials = validateFields();
  if (!credentials) {
    return;
  }

  try {
    const result = await createUserWithEmailAndPassword(state.auth, credentials.email, credentials.password);
    await sendEmailVerification(result.user);
    await signOut(state.auth);
    setMessage("Акаунт створено. На пошту надіслано лист підтвердження. Після підтвердження увійдіть знову.", "success");
  } catch (error) {
    setMessage(mapAuthError(error), "error");
  }
}

async function loginWithEmail() {
  if (!firebaseConfigReady || !state.auth) {
    setMessage("Firebase ще не підключений.", "warn");
    return;
  }

  const credentials = validateFields();
  if (!credentials) {
    return;
  }

  try {
    const result = await signInWithEmailAndPassword(state.auth, credentials.email, credentials.password);
    await reload(result.user);

    if (!result.user.emailVerified) {
      setMessage("Ви увійшли, але пошта ще не підтверджена. Перейдіть у лист і підтвердіть email.", "warn");
    } else {
      setMessage("Вхід успішний.", "success");
      closeAuthModal();
    }
  } catch (error) {
    setMessage(mapAuthError(error), "error");
  }
}

async function resendVerification() {
  if (!state.auth?.currentUser) {
    setMessage("Спочатку увійдіть у свій акаунт.", "warn");
    return;
  }

  try {
    await sendEmailVerification(state.auth.currentUser);
    setMessage("Лист підтвердження надіслано ще раз.", "success");
  } catch (error) {
    setMessage(mapAuthError(error), "error");
  }
}

async function logoutUser() {
  if (!state.auth) {
    return;
  }

  try {
    await signOut(state.auth);
    setMessage("Ви вийшли з акаунта.", "info");
    closeAuthModal();
  } catch (error) {
    setMessage(mapAuthError(error), "error");
  }
}

function refreshAuxButtons() {
  const resendButton = document.getElementById("authResendBtn");
  const logoutButton = document.getElementById("authLogoutBtn");

  if (resendButton)
