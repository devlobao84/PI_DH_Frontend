export default function isAuthenticated  () { 
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("Token"));
  };
  
  if (getCurrentUser().acessToken) {
  return true
  } else {
  return false
  }

}


