fetchInsta()
function fetchInsta() {
    let displayer = document.querySelector(".display")
    let url_to_fetch ="https://instagram.com/oauth/authorize?client_id=719783843382486&redirect_uri=https://cha-dotlearnsonline.github.io/&scope=user_profile,user_media&response_type=code"
    let instagram_code ="https://cha-dotlearnsonline.github.io/?code=AQCnYRufffK5B6FGsQGqmTaRb52WikYOssSRV0gy7xprI0x39BePHfU8diSXnSDOyGEPoUgbSKD83vfHSsn0Poq1cxKd8w41qtnOEfRIWXj-iKUZhujQqyRw1eLBBvMSNwNAvNA8W1dfgvg7MDCRq4v4cJVcw7DP5M-e-cqxItXrxaDWqu3iPdnae-H4VJ-bK3Kkj-a1_QUID32aEZv-p_roiFTMr_-oZFRDfXBUl7KmzQ#_"
    let code="AQCnYRufffK5B6FGsQGqmTaRb52WikYOssSRV0gy7xprI0x39BePHfU8diSXnSDOyGEPoUgbSKD83vfHSsn0Poq1cxKd8w41qtnOEfRIWXj-iKUZhujQqyRw1eLBBvMSNwNAvNA8W1dfgvg7MDCRq4v4cJVcw7DP5M-e-cqxItXrxaDWqu3iPdnae-H4VJ-bK3Kkj-a1_QUID32aEZv-p_roiFTMr_-oZFRDfXBUl7KmzQ"
    let data = {
        "client_id":"719783843382486",
        "client_secret":"f59e49151cc7ef20eaf2af95053ecdeb",
        "grant_type":"authorization_code",
        "redirect_uri": "https://cha-dotlearnsonline.github.io/",
        "code":code
    }
    let request_url = `https://api.instagram.com/oauth/access_token?client_id=719783843382486&client_secret=f59e49151cc7ef20eaf2af95053ecdeb&grant_type=authorization_code&redirect_uri=https://cha-dotlearnsonline.github.io/&code=${code}`
    fetch(request_url, {
        // body: JSON.stringify(data),
        // headers: {
        //     'dataType': 'json',
        //     'content-type': 'application/json'
        // },
        method: 'POST',
        // redirect: 'follow'
    }
    ).then(response => {
        if (response.status == 200) {
            showing = document.querySelector(".display")
            showing.insertAdjacentHTML('beforeend', response.text())
            console.log(response.text())
        } else {
            throw new Error('Something went wrong on api server!');
        }
    } ).catch(error => {
        console.error(error)
    })
}

