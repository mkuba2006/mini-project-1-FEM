const main = document.getElementById('main');
let s1val =[];
let can1 = 0;
let can2 = 0;
let can3 = 0;

const step_1 = document.createElement('div');
step_1.id = 'step_1';
step_1.innerHTML = `
  <h1 id='main_title'>Personal info</h1>
  <h5 id='main_h5'>Please provide your name, email address, and phone number.</h5>

  <form id='form1'>
    <div>
      <label>Name</label>
      <input id='main_name' type="text" placeholder="e.g. Stephen King" />
    </div>

    <div>
      <label>Email Address</label>
      <input id='main_mail' type="email" placeholder="e.g. stephenking@lorem.com"/>
    </div>

    <div>
      <label>Phone Number</label>
      <input id='main_number' type="number" placeholder="e.g. +1 234 567 890" />
    </div>
    <div id='but'>
      <input id='sub1' type="submit" class='but1' value="Next Step"/>
    </div>
  </form>
`;
main.appendChild(step_1);


const step_2 = document.createElement('div');
step_2.id = 'step_2';
step_2.innerHTML = `
  <h1 id='main_title'> Select your plan</h1>
  <h5 id='main_h5'>  You have the option of monthly or yearly billing.</h5>

  <div id='options'>
    <div id='first'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E"/><path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"/></g></svg>
        <div id='content'>
            <h3>Arcade</h3>
            <h5>$9/mo<h5>
        </div>
    </div>
    <div id='second'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#F9818E"/><path fill="#FFF" fill-rule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"/></g></svg>
        <div id='content'>
            <h3>Advanced</h3>
            <h5>$12/mo<h5>
    </div>
    </div>
    <div id='third'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#483EFF"/><path fill="#FFF" fill-rule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"/></g></svg>
        <div id='content'>
            <h3>Pro</h3>
            <h5>$15/mo<h5>
        </div>
    </div>
  </div>
  <div id='my'>

  </div>
  <div id='buttons2'>
    <button id='return2'>Go Back</button>
    <button id='Next2'>Next Step</button>
  </div>
`;












document.addEventListener("DOMContentLoaded", function() {
    const form1 = document.querySelector("#form1");
    const but1 = document.getElementById("sub1");
    const phone = document.getElementById('main_number');
    const name = document.getElementById('main_name');
    const mail = document.getElementById('main_mail');
    const checkLength = (value, minLength) => value.length < minLength ? 0 : 1;
    const Number = () => { can1 = checkLength(phone.value, 9);};
    const Name = () => { can2 = checkLength(name.value, 10);};
    const Mail = () => { can3 = checkLength(mail.value, 5);};
  
    mail.addEventListener('input', Mail);
    name.addEventListener('input', Name);
    phone.addEventListener('input', Number);
    


    but1.addEventListener('click', () => {
      if(can1 == 1 && can2 == 1 && can3 == 1){
        but1.style.backgroundColor = 'blue';
        const s1name = document.getElementById('main_name').value;
        const s1email = document.getElementById('main_mail').value;
        const s1number = document.getElementById('main_number').value;
        const one = document.getElementById('one');
        const two = document.getElementById('two');
        s1val = [s1name, s1email, s1number];

        main.removeChild(step_1);
        one.classList.remove('active');
        main.appendChild(step_2);
        two.classList.toggle('active');
    
        const ret2 = document.querySelector("#return2");
        ret2.addEventListener('click', () => {
          console.log('clicked');
          main.removeChild(step_2);
          one.classList.add('active');
          main.appendChild(step_1);
          two.classList.toggle('active');
        });


        if (main.contains(step_2)) {
          const elements = document.querySelectorAll('#options div');
          elements.forEach(el => {
            el.addEventListener('click', () => {
              elements.forEach(otherEl => {
                if (otherEl !== el) {
                  otherEl.classList.remove('active');
                }
              });
              el.classList.toggle('active');
            });
          });
        }else{
          const elements = document.querySelectorAll('#options div');
          elements.forEach(el => {
            el.addEventListener('click', () => {
              elements.forEach(otherEl => {
                if (otherEl !== el) {
                  otherEl.classList.remove('active');
                }
              });
              el.classList.toggle('active');
            });
          });
        }
      }else{
        console.log('nie');
        const originalColor = but1.style.backgroundColor;
        but1.style.backgroundColor = 'red';
        but1.value='Invalid Logs';
        setTimeout(() => {
          but1.style.backgroundColor = originalColor;
          but1.value='Next Step';
        }, 1000);
      }
    });




    form1.addEventListener('submit', (e) => {e.preventDefault()});
});
  





