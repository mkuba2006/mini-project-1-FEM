const main = document.getElementById('main');
let s1val =[];
let can1 = 0;
let can2 = 0;
let can3 = 0;
let switch_result = 'monthly';
let type = '';
let sec_ans = [];
let sum;



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
      <input id='main_number' type="tel" placeholder="e.g. +1 234 567 890" />
    </div>
    <div id='but'>
      <input id='sub1' type="submit" class='but1' value="Next Step"/>
    </div>
  </form>
`;
main.appendChild(step_1);
const step_4 = document.createElement('div');
step_4.id = 'step_4';

const step_2 = document.createElement('div');
step_2.id = 'step_2';
step_2.innerHTML = `
  <h1 id='main_title'> Select your plan</h1>
  <h5 id='main_h5'>  You have the option of monthly or yearly billing.</h5>

  <div id='options'>
    <div id='Arcade'>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E"/><path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"/></g></svg>
        <div id='content'>
            <h3>Arcade</h3>
            <h5>$<b>9</b>/mo<h5>
        </div>
    </div>
    <div id='Advanced'>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#F9818E"/><path fill="#FFF" fill-rule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"/></g></svg>
        <div id='content'>
            <h3>Advanced</h3>
            <h5>$<b>12</b>/mo<h5>
    </div>
    </div>
    <div id='Pro'>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#483EFF"/><path fill="#FFF" fill-rule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"/></g></svg>
        <div id='content'>
            <h3>Pro</h3>
            <h5>$<b>15</b>/mo<h5>
        </div>
    </div>
  </div>
  <div id='my'>
  <div id="switchb">
  <p class='ntact' id='p2'>Monthly</p>
     <input id="s1" type="checkbox" class="switch">
   <p id='p2'>Yearly</p>
 </div>
  </div>
  <div id='buttons2'>
    <button id='return2'>Go Back</button>
    <button id='Next2'>Next Step</button>
  </div>
`;



const step_3 = document.createElement('div');
step_3.id = 'step_3';
step_3.innerHTML = `
  <h1 id='main_title'>Pick add-ons</h1>
  <h5 id='main_h5'>Add-ons help enhance your gaming experience.</h5>

  <form id='form3'>
    <div id='el3'>
      <input id='check3' type="checkbox" name="Online service" value="1"/>
      <div id="content3">
        <h2>Online service</h2>
        <h4>Access to multiplayer games</h4>
      </div>
      <p>+$1/mo</p>
    </div>

    <div id='el3'>
      <input id='check3' type="checkbox" name="Larger storage" value="2"/>
      <div id="content3">
        <h2>Larger storage</h2>
        <h4>Extra 1TB of cloud save</h4>
      </div>
      <p>+$2/mo</p>
    </div>

  <div id='el3'>
    <input id='check3' type="checkbox" name="Customizable Profile" value="2"/>
    <div id="content3">
      <h2>Customizable Profile</h2>
      <h4>Custom theme on your profile</h4>
    </div>
    <p>+$2/mo</p>
  </div>
  </form>

  <div id='buttons2'>
    <button id='return3'>Go Back</button>
    <button id='Next3'>Next Step</button>
  </div>
`;
const step_5 = document.createElement('div');
step_5.id = 'step_5';
step_5.innerHTML = `
  <img src="./assets/images/icon-thank-you.svg">
  <h1>Thank you!</h1>
  <p>Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.</p>
`;

const li = document.createElement('div');
li.id='lines2';
li.innerHTML=`  
  <ul>
    <li>
      <p id="one" class="active">1</p>
    </li>
    <li>
      <p id="two">2</p>
    </li>
    <li>
      <p id="three">3</p>
    </li>
    <li>
      <p id="four">4</p>
    </li>
  </ul>
`

const a = document.createElement('div');
a.id='buttons2';
a.innerHTML=`
  <button id='return2'>Go Back</button>
  <button id='Next2'>Next Step</button>
`;
const b = document.createElement('div');
b.id='buttons3'
b.innerHTML=`
  <button id='return3'>Go Back</button>
  <button id='Next3'>Next Step</button>
`;



if(window.innerWidth<850){
  document.getElementById('container').after(b);
  b.after(a)

  const but1 = document.getElementById("sub1");

  const n2= document.getElementById('Next2');
  const r2= document.getElementById('return2');
  const n3= document.getElementById('Next3');
  const r3= document.getElementById('return3');

  but1.addEventListener('click', ()=>{
    a.style.display='flex';
  })
  r2.addEventListener('click', ()=>{
    a.style.display='none';
  })
  n2.addEventListener('click', ()=>{
    a.style.display='none';
    b.style.display='flex';
  })
  r3.addEventListener('click', ()=>{
    b.style.display='none';
    a.style.display='flex';
  })
  



  document.getElementById('L').append(li);
  step_2.innerHTML = `
  <h1 id='main_title'> Select your plan</h1>
  <h5 id='main_h5'>  You have the option of monthly or yearly billing.</h5>

  <div id='options'>
    <div id='Arcade'>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E"/><path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"/></g></svg>
        <div id='content'>
            <h3>Arcade</h3>
            <h5>$<b>9</b>/mo<h5>
        </div>
    </div>
    <div id='Advanced'>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#F9818E"/><path fill="#FFF" fill-rule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"/></g></svg>
        <div id='content'>
            <h3>Advanced</h3>
            <h5>$<b>12</b>/mo<h5>
    </div>
    </div>
    <div id='Pro'>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#483EFF"/><path fill="#FFF" fill-rule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"/></g></svg>
        <div id='content'>
            <h3>Pro</h3>
            <h5>$<b>15</b>/mo<h5>
        </div>
    </div>
  </div>
  <div id='my'>
  <div id="switchb">
  <p class='ntact' id='p2'>Monthly</p>
     <input id="s1" type="checkbox" class="switch">
   <p id='p2'>Yearly</p>
 </div>
  </div>
`;
step_3.innerHTML = `
  <h1 id='main_title'>Pick add-ons</h1>
  <h5 id='main_h5'>Add-ons help enhance your gaming experience.</h5>

  <form id='form3'>
    <div id='el3'>
      <input id='check3' type="checkbox" name="Online service" value="1"/>
      <div id="content3">
        <h2>Online service</h2>
        <h4>Access to multiplayer games</h4>
      </div>
      <p>+$1/mo</p>
    </div>

    <div id='el3'>
      <input id='check3' type="checkbox" name="Larger storage" value="2"/>
      <div id="content3">
        <h2>Larger storage</h2>
        <h4>Extra 1TB of cloud save</h4>
      </div>
      <p>+$2/mo</p>
    </div>

  <div id='el3'>
    <input id='check3' type="checkbox" name="Customizable Profile" value="2"/>
    <div id="content3">
      <h2>Customizable Profile</h2>
      <h4>Custom theme on your profile</h4>
    </div>
    <p>+$2/mo</p>
  </div>
  </form>

`;

step_4.innerHTML = `
  <h1 id='main_title'>Finishing up</h1>
  <h5 id='main_h5'>Double-check everything looks OK before confirming.</h5>
  <div id="suma">
    <div id="sumapl">
      <b>
        ${type}(${switch_result})
      </b>
      <p>
        -$${window.b}/mo
      <p>
    </div>
    <div id="line"></div>

    <div id="elem123"></div>
  </div>
  <div id="total">
    <p>Total (per month/year)<p>
    <b>$${sum}/mo</b>
  </div>
  <div id='buttons22'>
    <button id='return4'>Go Back</button>
    <button id='Next4'>Confirm</button>
  </div>
`;
}



document.addEventListener("DOMContentLoaded", function() {
    const form1 = document.querySelector("#form1");
    const but1 = document.getElementById("sub1");
    const phone = document.getElementById('main_number');
    const name = document.getElementById('main_name');
    const mail = document.getElementById('main_mail');
    const checkLength = (value, minLength) => value.length < minLength ? 0 : 1;
    const Number = () => { can1 = checkLength(phone.value, 10);};
    const Name = () => { can2 = checkLength(name.value, 5);};
    const Mail = () => { can3 = checkLength(mail.value, 5);};


    mail.addEventListener('input', Mail);
    name.addEventListener('input', Name);
    phone.addEventListener('input', Number);
    form1.addEventListener('submit', () => {
      if(can1 == 1 && can2 == 1 && can3 == 1){
        but1.style.backgroundColor = 'blue';
        const s1name = document.getElementById('main_name').value;
        const s1email = document.getElementById('main_mail').value;
        const s1number = document.getElementById('main_number').value;
        const one = document.getElementById('one');
        const two = document.getElementById('two');
        const three = document.getElementById('three');
        const four = document.getElementById('four');
        s1val = [s1name, s1email, s1number];
        console.log(s1val);

        if (main.contains(step_1)) {
          main.removeChild(step_1);
        }
        main.appendChild(step_2);

        two.classList.add('active');
        one.classList.remove('active');
        const ret2 = document.querySelector("#return2");
        ret2.addEventListener('click', () => {
          if (main.contains(step_2)) {
            main.removeChild(step_2);
          }
          one.classList.add('active');
          main.appendChild(step_1);
          two.classList.remove('active');
        });
        if (main.contains(step_2)) {
          const elements = document.querySelectorAll('#options div');
          const switchb = document.getElementById('s1');
          const ps = document.querySelectorAll('#p2');
          const next = document.getElementById('Next2');
          const back = document.getElementById('return2');

          switchb.addEventListener('click',()=>{
            ps.forEach(p=>{
              p.classList.toggle('ntact');
              if(p.classList.contains('ntact')){
                switch_result = p.textContent;
              }
            })
          })
          elements.forEach(el => {
            el.addEventListener('click', () => {
              window.b = el.querySelector('div #content h5 b').textContent;
              elements.forEach(otherEl => {
                if (otherEl !== el) {
                  otherEl.classList.remove('active');
                  otherEl.classList.add('notactive');
                }
              });
              el.classList.remove('notactive');
              el.classList.toggle('active');
              type = el.id.toString();
            });
          });
          back.addEventListener('click',()=>{
            console.log(sec_ans);
            main.appendChild(step_1);
            sec_ans=[type, switch_result]
            if (main.contains(step_2)) {
              main.removeChild(step_2);
            }
          })

          next.addEventListener('click',()=>{
            sec_ans=[type, switch_result]
            console.log(sec_ans);
            if (main.contains(step_2)) {
              main.appendChild(step_3);
              two.classList.remove('active');
              three.classList.add('active');
              const bck = document.querySelector("#return3");
              const next = document.getElementById("Next3");

              bck.addEventListener('click',()=>{
                // sum=0;
                two.classList.add('active');
                if (main.contains(step_3)) {
                  main.removeChild(step_3);
                }
                main.appendChild(step_2);
                three.classList.remove('active');
              })

              if (main.contains(step_2)) {
                main.removeChild(step_2);
              }


              const check = document.querySelectorAll('#check3');
              let tab = [];
              check.forEach(ch => {
                ch.addEventListener('click', () => {
                  ch.classList.toggle('can');
                  const el3 = ch.parentNode;
                  const nex = el3.querySelector('#content3 h2').textContent;
                  const nex2 = el3.querySelector('p').textContent;
                  if (ch.checked) {
                    el3.classList.add('checked');
                    tab.push({ nex,nex2 });
                    console.log(tab);
                  } else {
                    el3.classList.remove('checked');
                    tab = tab.filter(item => item.nex !== nex);
                  }
                });
              });
              
              
              next.addEventListener('click',()=>{
                if (main.contains(step_3)) {
                  main.removeChild(step_3);
                  main.appendChild(step_4);
                }
                sum = 0;
                check.forEach(ch=>{
                  if (ch.classList.contains('can')) {
                    sum += parseInt(ch.value);
                  }
                })
                sum+= parseInt(window.b);
                let can3AsString = sum.toString();
                step_4.id = 'step_4';
                step_4.innerHTML = `
                  <h1 id='main_title'>Finishing up</h1>
                  <h5 id='main_h5'>Double-check everything looks OK before confirming.</h5>
                  <div id="suma">
                    <div id="sumapl">
                      <b>
                        ${type}(${switch_result})
                      </b>
                      <p>
                        -$${window.b}/mo
                      <p>
                    </div>
                    <div id="line"></div>

                    <div id="elem123"></div>
                  </div>
                  <div id="total">
                    <p>Total (per month/year)<p>
                    <b>$${sum}/mo</b>
                  </div>
                  <div id='buttons22'>
                    <button id='return4'>Go Back</button>
                    <button id='Next4'>Confirm</button>
                  </div>
                `;
                
                setTimeout(() => {
                  
                  const diva = document.querySelector("#elem123");
                  console.log(diva);
                  function renderItems() {
                    tab.forEach(item => {
                      const itemDiv = document.createElement('div');
                      itemDiv.id = 'item';
                      itemDiv.innerHTML = `
                        <div>${item.nex}</div>
                        <div>${item.nex2}</div>`;
                      diva.appendChild(itemDiv);
                    });
                  }
                  if (main.contains(step_4)) {
                    three.classList.remove('active');
                    four.classList.add('active');
                    console.log('1');
                  }
                  renderItems()
                }, 1);

                const next = document.getElementById('Next4');
                const back = document.getElementById('return4');
                next.addEventListener('click',()=>{
                  if (main.contains(step_4)) {
                    main.removeChild(step_4);
                    main.appendChild(step_5);
                  }
                })
                back.addEventListener('click',()=>{
                  three.classList.add('active');
                  four.classList.remove('active');
                  if (main.contains(step_4)) {
                    main.removeChild(step_4);
                    main.appendChild(step_3);
                  }
                })
              })
            }
          })





        }else{
          const elements = document.querySelectorAll('#options div');
          elements.forEach(el => {
            el.addEventListener('click', () => {
              elements.forEach(otherEl => {
                if (otherEl !== el) {
                  otherEl.classList.remove('active');
                  otherEl.classList.add('notactive');
                }
              });
              el.classList.remove('notactive');
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
  





