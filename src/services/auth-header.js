export default function authHeader() {
  const account = JSON.parse(localStorage.getItem("account"));

  if (account && account.accessToken) {
    return { "x-access-token": account.accessToken };
  } else {
    return {};
  }
}
