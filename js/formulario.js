const users = [];

function consultar() {
    const container = document.getElementById("pepe");
    container.innerHTML = `
        <div class="form-container">
            <h2 class="text-center mb-4">Registro de Usuario</h2>
            <form id="userForm">
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre" required>
                </div>
                <div class="mb-3">
                    <label for="apellido" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="apellido" required>
                </div>
                <div class="mb-3">
                    <label for="correo" class="form-label">Correo</label>
                    <input type="email" class="form-control" id="correo" required>
                </div>
                <div class="mb-3">
                    <label for="telefono" class="form-label">Teléfono</label>
                    <input type="tel" class="form-control" id="telefono" required>
                </div>
                <button type="submit" class="btn btn-primary w-100">Guardar</button>
            </form>
            <div class="mt-4" id="userTable"></div>
        </div>
    `;

    document.getElementById("userForm").addEventListener("submit", confirmarGuardado);
}

function confirmarGuardado(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();

    Swal.fire({
        title: "¿Deseas guardar los datos?",
        showDenyButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: "No guardar"
    }).then((result) => {
        if (result.isConfirmed) {
            users.push({ nombre, apellido, correo, telefono });
            Swal.fire("Guardado con éxito!", "", "success");
            displayTable();
        } else {
            Swal.fire("Información no guardada", "", "error");
        }
    });
}

function displayTable() {
    const tableContainer = document.getElementById("userTable");
    if (users.length === 0) {
        tableContainer.innerHTML = "<p>No hay usuarios registrados aún.</p>";
        return;
    }

    let tableHTML = `
        <table class="table table-striped mt-3">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                    <th>Teléfono</th>
                </tr>
            </thead>
            <tbody>
    `;

    users.forEach(user => {
        tableHTML += `
            <tr>
                <td>${user.nombre}</td>
                <td>${user.apellido}</td>
                <td>${user.correo}</td>
                <td>${user.telefono}</td>
            </tr>
        `;
    });

    tableHTML += "</tbody></table>";
    tableContainer.innerHTML = tableHTML;
}
