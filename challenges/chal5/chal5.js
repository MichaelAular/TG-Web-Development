
      const catBtn = document.querySelector('.cat-btn');
      const dogBtn = document.querySelector('.dog-btn');
      const parrotBtn = document.querySelector('.parrot-btn');
      const buttons = document.querySelectorAll('.btn');
      const buttonContainer = document.querySelector('.button-container');
      const overlay = document.getElementById('overlay');
      const fact = document.querySelector('.fact');

      console.log('BUTTON CONTAINER SELECTOR', buttonContainer);

      const catFacts = ['catFact1', 'catFact2', 'catFact3', 'catFact4', 'catFact5'];
      const dogFacts = ['dogFact1', 'dogFact2', 'dogFact3', 'dogFact4', 'dogFact5'];
      const parrotfacts = [
        'parrotFact1',
        'parrotFact2',
        'parrotFact3',
        'parrotFact4',
        'parrotFact5',
      ];

      const getRandom = (min, max) => {
        return Math.floor(Math.random() * max) + min;
      };

      const createModal = () => {
        // create and element with the class of modal that
        // has a span with a close class and a fact class

        const newModal = document.createElement('div');

        // add the modal class to the newly created div
        newModal.classList.add('modal');

        // create a close span

        const newCloseSpan = document.createElement('span');
        newCloseSpan.classList.add('close');

        newCloseSpan.innerText = 'X';

        newCloseSpan.onclick = () => {
          overlay.style.opacity = '0';
          newModal.remove();
        };

        // create a fact span

        const newFactSpan = document.createElement('span');
        newFactSpan.classList.add('fact');

        // add close and fact span to new innerHTML of newmodal

        newModal.appendChild(newCloseSpan);
        newModal.appendChild(newFactSpan);

        buttonContainer.append(newModal);
      };

      for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = () => {
          const modal = document.querySelector('.modal');
          const overlay = document.querySelector('#overlay')

          overlay.classList.add('open')

          if (modal) return;

        createModal();

        };
      }

      window.addEventListener('click', (event) => {
        const close = document.querySelector('.close');

        if (event.target === close || event.target === overlay) {
          const modal = document.querySelector('.modal');
          overlay.classList.remove('open');
          console.log(modal)
          modal.remove();
        }
      })
      // catBtn.onclick = () => {
      //   const catFact = catFacts[getRandom(0, 5)];

      //   console.log('CAT FACT', catFact);

      //   // when button is clicked overlay height = 100%
      //   overlay.style.height = '100%';
      //   // modal opens
      //   modal.style.display = 'block';
      //   // random cat fact is inserted into the box

      //   fact.textContent = catFact;
      // };

      // function closeFunction2() {
      //   console.log('log something');
      // }

      // const closeFunc = () => {
      //   console.log('somethimg');
      // };

      // close.addEventListener('click', () => {
      //   console.log('click click click');
      // });

      // close.addEventListener('mouseover', function () {
      //   console.log('mouseover');
      // });
