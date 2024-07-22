function Card(probs) {

    return (
        <div style={{ background: probs.color }} className="py-5 px-3 flex-grow rounded-md text-center">
            <h1 className="text-2xl font-medium">{probs.title}</h1>
            <p>{probs.subtitle}</p>

        </div>
    )
}

export default Card