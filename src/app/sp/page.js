function Home() {
    return (<div className="h-screen w-full bg-scroll bg-bg-sp1 bg-no-repeat bg-contain- bg-center relative" style={{ zIndex: "1" }}>
        <div className="absolute w-full bg-gradient-to-r from-green-200/60 to-green-700/50  h-full" style={{ zIndex: "-1" }}></div>
        <div className="p-5">
            <div className="flex justify-end p-2 mt-5">
                <span className="bg-green-600 rounded-xl px-3 py-1 text-sm">Skip</span>
            </div>
            <div className="flex justify-start p-2 mt-12">
                <span className="text-white text-4xl font-bold">
                Bienvenue sur <br/><span className="text-green-700 " >GLESSINON</span>
                </span>
            </div>
        </div>

    </div>);
}

export default Home;