const MascotaCard = ({mascotas}) => {
    console.log(mascotas)
    return (
        <div>
            {mascotas.map((mascota) => (
                <div>
                    <h2>Mi mascota se llama {mascota.name}</h2>
                    <p>Es un {mascota.raza}</p>
                    <img src={mascota.images}/>
                </div>
            )

            )
            }
        </div>
    )
    
    }
    export default MascotaCard