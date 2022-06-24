
$("#boton").click(() => {

    var lista = $("#lista")

    $.get("http://localhost:5000/amigos", data => {
        for (let i = 0; i < data.length; i++) {
           // var li = document.createElement("li")
            //li.innerText = data[i].name
            //lista.appendChild(li)
           lista.append(`<li>${data[i].name} email: ${data[i].email}</li>`)
        }
    })
})

$("#search").click(() => {
    let idAmigo = $("#input").val()

    $.get(`http://localhost:5000/amigos/${idAmigo}`, data => {
        $("#amigo").text(`Nombre: ${data.name} Edad: ${data.age}`)
    })
}) 


$("#delete").click (() => {
    let idDelete = $("#inputDelete").val()

    $.ajax({
        url: `http://localhost:5000/amigos/${idDelete}`,
        type: "DELETE",
        success: (data) => {
            $("#success").text(`Amigo con id ${idDelete} borrado con exito`)
        }
    })
})