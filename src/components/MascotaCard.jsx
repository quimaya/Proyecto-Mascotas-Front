const MascotaCard = ({mascotas}) => {
    console.log(mascotas)
    return (
        <div>
            {mascotas.map((mascota) => (
                <div className="mascotaCard" key={mascota._id}>
                    <h2>Mi mascota se llama {mascota.name}</h2>
                    <p>Es un {mascota.raza}</p>
                    <img src={mascota.images}/>
                    <p>El pelaje es {mascota.pelaje ? "largo" : "corto"}</p>
                </div>
            )

            )
            }
        </div>
    )
    
    }
    export default MascotaCard