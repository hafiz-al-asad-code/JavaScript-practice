function sendNotification(email) {

  if(email.indexOf('@')===-1)
  {
    return 'Invalid Email';
  }
  
  let emailItem = email.split('@');

  let notification = emailItem[0] + ' sent you an email from ' + emailItem[1];
  return notification;
}

const notification = sendNotification('hafiz.dev24@gmail.com');
console.log(notification);