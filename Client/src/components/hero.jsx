function Hero() {
    return (
        <div className="hero bg-base-100 mx-auto p-24">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src="/src/assets/images/img1.png"
                    className="max-w-lg rounded-lg shadow-xl" />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;