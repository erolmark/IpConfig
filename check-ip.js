function queryIP() {
    var ip = document.getElementById('ipInput').value;
    var apiUrl = 'https://ip-api.com/json/' + ip;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                document.getElementById('result').innerText = `
                    IP Adresi: ${data.query}
                    Ülke: ${data.country}
                    Şehir: ${data.city}
                    Konum: ${data.lat}, ${data.lon}
                    ISP: ${data.isp}
                `;
            } else {
                document.getElementById('result').innerText = 'IP sorgusu başarısız oldu.';
            }
        })
        .catch(error => {
            console.error('Hata:', error);
            document.getElementById('result').innerText = 'Bir hata oluştu, lütfen tekrar deneyin.';
        });
                      }
