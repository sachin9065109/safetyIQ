const API_URL = "[http://127.0.0.1:8000/api](http://127.0.0.1:8000/api)";

async function loadStatus() {
    try {
        const res = await fetch(`${API_URL}/status`);
        const data = await res.json();
        document.getElementById("status-text").innerText = `${data.project} - ${data.system_status}`;
    } catch (e) {
        document.getElementById("status-text").innerText = "Error loading status";
    }
}

document.getElementById("refresh-btn").addEventListener("click", loadStatus);

document.getElementById("report-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const payload = {
        location: document.getElementById("loc").value,
        status: document.getElementById("stat").value,
        risk_level: parseInt(document.getElementById("risk").value)
    };
    try {
        const res = await fetch(`${API_URL}/report`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        document.getElementById("msg").innerText = data.message;
        document.getElementById("msg").style.color = "green";
        e.target.reset();
    } catch (e) {
        document.getElementById("msg").innerText = "Failed to submit";
        document.getElementById("msg").style.color = "red";
    }
});

loadStatus();
