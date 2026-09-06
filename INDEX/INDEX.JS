// Database of 5 Trains with their respective live info and schedule
const trainDatabase = {
    "12951": {
        name: "12951 - Mumbai Rajdhani Express",
        live: "Near Kota Junction",
        delayText: "+18 mins",
        schedule: [
            { station: "Kota Junction (KOTA)", sta: "18:15", eta: "18:33", delay: "+18 min", platform: "PF 1", status: "Delayed" },
            { station: "Sawai Madhopur (SWM)", sta: "19:35", eta: "19:50", delay: "+15 min", platform: "PF 2", status: "Delayed" },
            { station: "Mathura Junction (MTJ)", sta: "22:50", eta: "23:00", delay: "+10 min", platform: "PF 3", status: "Delayed" },
            { station: "Hazrat Nizamuddin (NZM)", sta: "00:55", eta: "01:00", delay: "On-Time", platform: "PF 1", status: "On Time" }
        ]
    },
    "12601": {
        name: "12601 - Chennai Express",
        live: "Near Itarsi Junction",
        delayText: "+25 mins",
        schedule: [
            { station: "Itarsi Junction (ET)", sta: "14:10", eta: "14:35", delay: "+25 min", platform: "PF 3", status: "Delayed" },
            { station: "Bhopal Junction (BPL)", sta: "15:45", eta: "16:05", delay: "+20 min", platform: "PF 1", status: "Delayed" },
            { station: "Jhansi Junction (JHS)", sta: "20:00", eta: "20:15", delay: "+15 min", platform: "PF 4", status: "Delayed" },
            { station: "New Delhi (NDLS)", sta: "01:20", eta: "01:20", delay: "On-Time", platform: "PF 2", status: "On Time" }
        ]
    },
    "12301": {
        name: "12301 - Howrah Rajdhani Express",
        live: "Near Dhanbad Junction",
        delayText: "+5 mins",
        schedule: [
            { station: "Dhanbad Junction (DHN)", sta: "19:00", eta: "19:05", delay: "+5 min", platform: "PF 2", status: "Delayed" },
            { station: "Gaya Junction (GAYA)", sta: "21:40", eta: "21:42", delay: "+2 min", platform: "PF 1", status: "On Time" },
            { station: "Pt. Deen Dayal Upadhyaya (DDU)", sta: "00:20", eta: "00:20", delay: "On-Time", platform: "PF 5", status: "On Time" },
            { station: "New Delhi (NDLS)", sta: "05:20", eta: "05:20", delay: "On-Time", platform: "PF 4", status: "On Time" }
        ]
    },
    "12953": {
        name: "12953 - August Kranti Rajdhani",
        live: "Near Ratlam Junction",
        delayText: "On-Time",
        schedule: [
            { station: "Ratlam Junction (RTM)", sta: "21:10", eta: "21:10", delay: "On-Time", platform: "PF 1", status: "On Time" },
            { station: "Kota Junction (KOTA)", sta: "00:30", eta: "00:30", delay: "On-Time", platform: "PF 3", status: "On Time" },
            { station: "Hazrat Nizamuddin (NZM)", sta: "06:50", eta: "06:50", delay: "On-Time", platform: "PF 2", status: "On Time" }
        ]
    },
    "12002": {
        name: "12002 - Bhopal Shatabdi Express",
        live: "Near Agra Cantt",
        delayText: "+10 mins",
        schedule: [
            { station: "Agra Cantt (AGC)", sta: "08:10", eta: "08:20", delay: "+10 min", platform: "PF 2", status: "Delayed" },
            { station: "Mathura Junction (MTJ)", sta: "08:50", eta: "08:58", delay: "+8 min", platform: "PF 1", status: "Delayed" },
            { station: "New Delhi (NDLS)", sta: "10:45", eta: "10:50", delay: "+5 min", platform: "PF 1", status: "Delayed" }
        ]
    }
};

function trackTrain() {
    // Dropdown ya input se selected train number nikalna
    const selectElement = document.getElementById('trainSelect');
    const trainId = selectElement ? selectElement.value : "12951";

    const trainInfo = trainDatabase[trainId];

    if (!trainInfo) {
        alert("Train details not found!");
        return;
    }

    // Status aur Table section ko show karna
    document.getElementById('statusSection').style.display = 'flex';
    document.getElementById('tableSection').style.display = 'block';

    // Top summary cards update karna
    document.getElementById('trainNameDisplay').innerText = trainInfo.name;
    document.getElementById('trainLiveStatus').innerHTML = `<i class="fa-solid fa-location-dot"></i> Live: ${trainInfo.live}`;
    document.getElementById('trainDelayDisplay').innerText = trainInfo.delayText;

    // Schedule Table dynamic populate karna
    const tbody = document.getElementById('scheduleBody');
    tbody.innerHTML = '';

    trainInfo.schedule.forEach(item => {
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