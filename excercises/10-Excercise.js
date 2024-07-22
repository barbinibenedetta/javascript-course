      //10c.
      const testButton = document.querySelector('.js-button');
      console.log(
        testButton.classList.contains('js-button')
      )

      //10d-10e-10f.
      function updateToggleButton(type) {
        const toggleButton = document.querySelector(`.${type}-button`);

        if (!toggleButton.classList.contains('is-toggled')) {
          turnOffPreviousButton();
          toggleButton.classList.add('is-toggled');
        } else {
          toggleButton.classList.remove('is-toggled');
        }
      }

      function turnOffPreviousButton() {
        const previousButton = document.querySelector('.is-toggled');
        if (previousButton) {
          previousButton.classList.remove('is-toggled');
        }
      }