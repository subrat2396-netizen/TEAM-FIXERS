function trackTrain() {
            const input = document.getElementById('trainInput').value;
            if(!input) {
                alert("Please enter a Train Number or Name");
                return;
            }

            document.getElementById('statusSection').style.display = 'flex';
            document.getElementById('tableSection').style.display = 'block';

            const scheduleData = [
                { station: "Kota Junction (KOTA)", sta: "18:15", eta: "18:33", delay: "+18 min", platform: "PF 1", status: "Delayed" },
                { station: "Sawai Madhopur (SWM)", sta: "19:35", eta: "19:50", delay: "+15 min", platform: "PF 2", status: "Delayed" },
                { station: "Mathura Junction (MTJ)", sta: "22:50", eta: "23:00", delay: "+10 min", platform: "PF 3", status: "Delayed" },
                { station: "Hazrat Nizamuddin (NZM)", sta: "00:55", eta: "01:00", delay: "+5 min", platform: "On-Time", status: "On Time" }
            ];

            const tbody = document.getElementById('scheduleBody');
            tbody.innerHTML = '';

            scheduleData.forEach(item => {
                const badgeClass = item.status === "Delayed" ? "delay-badge" : "ontime-badge";
                tbody.innerHTML += `
                    <tr>
                        <td><strong>${item.station}</strong></td>
                        <td>${item.sta}</td>
                        <td class="text-primary fw-bold">${item.eta}</td>
                        <td><span class="${badgeClass}">${item.delay}</span></td>
                        <td>${item.platform}</td>
                    </tr>
                `;
            });
        }