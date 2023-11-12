fetchInsta()
function fetchInsta() {
    let displayer = document.querySelector(".display")
    let url_to_fetch ="https://instagram.com/oauth/authorize?client_id=719783843382486&redirect_uri=https://cha-dotlearnsonline.github.io/&scope=user_profile,user_media&response_type=code"
    let instagram_code ="https://cha-dotlearnsonline.github.io/?code=AQCnYRufffK5B6FGsQGqmTaRb52WikYOssSRV0gy7xprI0x39BePHfU8diSXnSDOyGEPoUgbSKD83vfHSsn0Poq1cxKd8w41qtnOEfRIWXj-iKUZhujQqyRw1eLBBvMSNwNAvNA8W1dfgvg7MDCRq4v4cJVcw7DP5M-e-cqxItXrxaDWqu3iPdnae-H4VJ-bK3Kkj-a1_QUID32aEZv-p_roiFTMr_-oZFRDfXBUl7KmzQ#_"
    let code="AQD9Skg1-a7WXUQrzj9FjXe7ywBl4nwca8Uj1lcflKoiYANt4-fUKrC1GJP78LrRA1m_OX0Qb4DKC7vY--POnpdqPtU2tmB7yp2xoii28-Q11i_zhwxBVHNwfBod3bAvlOOC_kUKPTp9SXMnswM88EGeoEtfuRYFSfCNY8jRxtuWXPKt-JBI-SOwF-6ZwcR5f_zGVfXMhBCPQdSInxsucOzCZ2jMf1rWmv4WiHjZKZns5Q"
    let data = {
        "client_id":"719783843382486",
        "client_secret":"f59e49151cc7ef20eaf2af95053ecdeb",
        "grant_type":"authorization_code",
        "redirect_uri": "https://cha-dotlearnsonline.github.io/",
        "code":code
    }
    let request_url = `https://api.instagram.com/oauth/access_token`
    fetch(request_url, {
        body: new URLSearchParams(data),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        mode: 'no-cors',
        method: 'POST',
        // redirect: 'follow'
    }
    ).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        console.log(error)
    })
}

