/* eslint-disable no-unused-vars */

export function loadPaycorpPayment(payment, targetId) {

// resolve base URL injected when compiling template
const HOST = `https://paycorp-smp.prod.aws.paycorp.lk/webinterface/app/payment/simple?jZCI6mTYwMi=`;

// keep Paycorp functions private
function loadPollyfills() {
Number.isInteger = Number.isInteger || function(value) {
  return typeof value === 'number' && 
    isFinite(value) && 
    Math.floor(value) === value;
};
}

function validate(payment) {
const errorPrefix = 'failed to load Paycorp Payment -';
if (!payment) {
  throw new Error(` payment object is required.`);
}
if (!payment.clientId || !Number.isInteger(payment.clientId)) {
  throw new Error(` clientId is required and must be an integer.`);
}
if (!payment.paymentAmount || !Number.isInteger(payment.paymentAmount)) {
  throw new Error(` paymentAmount is required and must be an integer.`);
}
if (!payment.returnUrl) {
  throw new Error(` returnUrl is required.`);
}
}

function loadDefaults(payment) {
payment.expiryInMins = 0;
payment.transactionType = payment.transactionType || 'PURCHASE';
payment.redirect = {
  returnUrl: payment.returnUrl
};
delete payment.returnUrl;
payment.transactionAmount = {
  paymentAmount: payment.paymentAmount,
  currency: payment.currency
};
delete payment.paymentAmount;
delete payment.currency;
}

function initPaycorpFrame(targetId, base64) {
addStyle();
toggleSpinner(targetId, true);
const targetElement = document.getElementById(targetId);
targetElement.innerHTML = '';
targetElement.appendChild(buildIframe(targetId, base64));
}

function initPaycorpHosted(base64) {
window.location.replace(HOST + base64);
}

function addStyle() {
const css = "@keyframes spinner{to{transform:rotate(360deg)}}.spinner:before{content:'';box-sizing:border-box;position:absolute;top:50%;left:50%;width:20px;height:20px;margin-top:-10px;margin-left:-10px;border-radius:50%;border-top:2px solid #07d;border-right:2px solid transparent;animation:spinner .6s linear infinite}";
const head = document.head || document.getElementsByTagName('head')[0];
const style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);
}

function toggleSpinner(targetId, show) {
const d = document.getElementById(targetId);
if (show) {
  if (!d.className.includes('spinner')) {
    console.log('adding spinner class');
    d.className += " spinner";
  }
} else {
  console.log('removing spinner class');
  d.className = d.className.replace(/spinner/gi, '');
}
}


function buildIframe(targetId, base64) {
const ifrm = document.createElement('iframe');
ifrm.onload = () => {
  setTimeout(function () {
    toggleSpinner(targetId, false);
  }, 1000);
}

const style = `
#paycorp-iframe html body {
  background-color: red;
  /* Add any additional custom styles here */
}
`;

ifrm.setAttribute('id', 'paycorp-iframe');
ifrm.setAttribute('class', 'paycorp-iframe');
ifrm.setAttribute('frameBorder', '0');
ifrm.setAttribute('scrolling', 'yes');
ifrm.setAttribute('height', '500px');
ifrm.setAttribute('bgcolor', 'red');
ifrm.setAttribute('width', '100%');
  ifrm.setAttribute('style', style);

ifrm.setAttribute('src', HOST + base64);

return ifrm;
}

function b64EncodeUnicode(str) {
return window.btoa(window.encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
  return String.fromCharCode('0x' + p1);
}));
}

// run internal setup functions
loadPollyfills();
validate(payment);
loadDefaults(payment);

console.log('loading payment: ', JSON.stringify(payment));

if (targetId) {
payment.redirect.returnMethod = 'SIMPLE_CLOSEGET'; //client side redirect
initPaycorpFrame(targetId, b64EncodeUnicode(JSON.stringify(payment)));
} else {
payment.redirect.returnMethod = 'SIMPLE_GET'; // server side redirect
initPaycorpHosted(b64EncodeUnicode(JSON.stringify(payment)));
}
}