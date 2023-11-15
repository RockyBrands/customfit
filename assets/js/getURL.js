function getEmpLoginInfo() {
    //document.getElementById('employeeAccountLocation').innerHTML = '';
    document.getElementById('employeeURL').innerHTML = '';
    document.getElementById('noAccountFound').innerHTML = '';
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      var urlencoded = new URLSearchParams();
      var cf_token;
      urlencoded.append("username", "apiklaviyo");
      urlencoded.append("password", "lcftrack783");
      urlencoded.append("grant_type", "password");
      var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
      };
      fetch("https://albert.customfit.me/token", requestOptions)
      .then(response => response.json())
      .then(result => {cf_token = result.access_token
          var newHeaders = new Headers();
          newHeaders.append("Authorization", "Bearer " + cf_token + "");
          var requestNewOptions = {
              method: 'GET',
              headers: newHeaders,
              redirect: 'follow'
          };
          let empEmail = document.getElementById("empEmail").value;
          fetch("https://albert.customfit.me/api/getEmpLoginInfo/" + empEmail + "/", requestNewOptions)
          .then(response => response.json())
          .then(data => {
            if (data.length === 1) {
              //document.getElementById('employeeAccountLocation').innerHTML = "Account / Location Number: " + data[0].account + " / " + data[0].location;
              let urlLoginLink = data[0].url;
              document.getElementById('employeeURL').innerHTML = "Your account login URL is" + '<a class="text-decoration-underline" href="http://' + urlLoginLink + '">' + urlLoginLink + '</a>';
            }
            else if (data.length === 0) {
              document.getElementById('noAccountFound').innerHTML = "No account was found with the provided email address. Please reach out to your safety manager to get your updated ordering website URL.";
            }
          })
      })
  }