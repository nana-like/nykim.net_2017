var $reserveForm = $("#reserveForm");
var $formButton = $reserveForm.find('.button-booking');
function checkCompany($company){
  var companyReg = /[^\!\<\>\"\'\=\-]/;
  var result = companyReg.test($company.val());
  if(!result) {
    alert('회사명을 확인해주십시오. (<, >,", = 등 특수문자)사용불가');
    $company.focus();
  }
  return result;
}
function checkName($name) {
  var nameReg = /[^\!\<\>\"\'\=\(\)\-]/;
  var result = nameReg.test($name.val());
  if(!result) {
    alert('담당자 이름을 확인해주십시오. (<, >,", = 등 특수문자)사용불가');
    $name.focus();
  }
  return result; 
}
function checkHompage($url) {
  var urlReg = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]+(:[0-9]{1,5})?(\/.*)?$/;
  var urlReg2 = /icon.foundation/;
  var result = urlReg.test($url.val()) && !urlReg2.test($url.val());
  if(!result) {
    alert("홈페이지 URL을 확인해주십시오.");
    $url.focus();
  }
  return result;
}
function checkEmail($email) {
  var emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  var result = emailReg.test($email.val());
  if(!result) {
    alert("E-mail 값을 확인해주십시오.");
    $email.focus();
  }
  return result;
}
function checkPhoneNumber($phone) {
  var limit = 15;
  var phoneNumReg = /[0-9]{3,}\d$/;
  var result = phoneNumReg.test($phone.val()) && String($phone.val()).length <= limit;
  if(!result) {
    alert("전화번호를 확인해주십시오.");
    $phone.focus();
  }
  return result;
}

$formButton.on('click', function(evt){
  evt.preventDefault();
  var $company = $reserveForm.find('#booking-company');
  var $name = $reserveForm.find('#booking-name');
  var $hompageUrl = $reserveForm.find('#booking-url');
  var $phoneNumber = $reserveForm.find('#booking-tel');
  var $email = $reserveForm.find('#booking-email');
  if(checkCompany($company) && checkName($name) && checkHompage($hompageUrl) && checkEmail($email) && checkPhoneNumber($phoneNumber)){
    $company.val($company.val().replace(/ +/g, " ").replace(/(^ *)|( *$)/g, ""));
    $name.val($name.val().replace(/ +/g, " ").replace(/(^ *)|( *$)/g, ""));
    $hompageUrl.val($hompageUrl.val().replace(/ +/g, " ").replace(/(^ *)|( *$)/g, ""));
    $phoneNumber.val($phoneNumber.val().replace(/ +/g, " ").replace(/(^ *)|( *$)/g, ""));
    $email.val($email.val().replace(/ +/g, " ").replace(/(^ *)|( *$)/g, ""));
    // $reserveForm.submit();
  }
});