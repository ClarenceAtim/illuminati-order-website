(function () {
        var burger = document.getElementById('burger');
        var nav = document.getElementById('mainnav');
        burger.addEventListener('click', function () {
          var open = nav.classList.toggle('open');
          burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        nav.addEventListener('click', function (e) {
          if (e.target.tagName === 'A') {
            nav.classList.remove('open');
            burger.setAttribute('aria-expanded', 'false');
          }
        });

        var playBtn = document.getElementById('playBtn');
        var msg = document.getElementById('videoMsg');
        playBtn.addEventListener('click', function () {
          var open = msg.classList.toggle('open');
          playBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
          if (open) { msg.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
        });

        document.getElementById('applyForm').addEventListener('submit', function (e) {
          e.preventDefault();
          var name = document.getElementById('f-name').value.trim();
          var email = document.getElementById('f-email').value.trim();
          var country = document.getElementById('f-country').value;
          var message = document.getElementById('f-msg').value.trim();
          var subject = encodeURIComponent('Membership Application — ' + name);
          var body = encodeURIComponent(
            'Full Name: ' + name + '\n' +
            'Email: ' + email + '\n' +
            'Country: ' + country + '\n\n' +
            'Why I seek the Order:\n' + message
          );
          window.location.href = 'mailto:info@theilluminatiorder.org?subject=' + subject + '&body=' + body;
        });
      })();
