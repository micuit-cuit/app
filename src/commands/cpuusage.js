const os = require('os');
const formatTextWithStyles = require('../utils/formatTextWithStyles');
export function cpuUsage(terminal) {
    const cpus = os.cpus();
    const usage = cpus.map(cpu => {
        const total = Object.values(cpu.times).reduce((acc, tv) => acc + tv, 0);
        const usage = 100 - Math.round((cpu.times.idle / total) * 100);
        return usage;
    });
    const avgUsage = (usage.reduce((acc, u) => acc + u, 0) / usage.length).toFixed(2);

    terminal.innerHTML += formatTextWithStyles(`<br><br>Utilisation moyenne du CPU : <strong><green>${avgUsage}%</green></strong>`);
}
