function About() {
    return (
        <div>
            <h2 className="about__title">How to use the app</h2>
            <div>
                <p className="about__subtitle">
                    1. Select a date period before March 9 2023.
                    <br />
                    Please, note, if you selected a long period, the data
                    download time can take a considerable amount of time.
                </p>
                <p className="about__subtitle">
                    2. You can sorting the data by country and by case
                    (confirmed, death, recovered).
                    <br />
                    By default, you'll see whole world stats.
                </p>
            </div>
        </div>
    );
}

export default About;
