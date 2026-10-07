
import users from "./data.js";

const index = () => {
    console.log("=== DAFTAR DATA USERS ===");

    users.map((user, i) => {
        console.log(
            `${i + 1}. ${user.nama} | ${user.umur} tahun | ${user.alamat} | ${user.email}`
        );
    });

    const table = document.getElementById("data-user");

    if (table) {
        table.innerHTML = users.map((user, i) => `
            <tr>
                <td>${i + 1}</td>
                <td>${user.nama}</td>
                <td>${user.umur}</td>
                <td>${user.alamat}</td>
                <td>${user.email}</td>
            </tr>
        `).join("");
    }
};

const store = (user) => {
    users.push(user);
    console.log(`Data ${user.nama} berhasil ditambahkan.`);
};

const destroy = (nomor) => {
    if (nomor >= 1 && nomor <= users.length) {
        const deleted = users.splice(nomor - 1, 1);
        console.log(`Data ${deleted[0].nama} berhasil dihapus.`);
    } else {
        console.log("Nomor data tidak ditemukan.");
    }
};

export { index, store, destroy };