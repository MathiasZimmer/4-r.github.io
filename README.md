# 4-r.github.io
<!DOCTYPE html>
<html lang="da">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Til min elskede Anton</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <!-- Forside med kærlig besked -->
        <section class="hero">
            <h1>Til min elskede Kathrine</h1>
            <p>Tak for fire vidunderlige år. Jeg elsker dig mere for hver dag der går.</p>
            <button onclick="showMessage()">Anton knap ❤️</button>
        </section>

        <!-- Galleri sektion -->
        <section class="gallery" id="gallery">
            <h2></h2>
            <div class="gallery-images">
                <img src="20211030_190913_IMG_2456.JPG" alt="Feriebillede">
                <img src="20200926_155809_IMG_1180.JPG" alt="Hverdagsøjeblik">
                <img src="20201102_151652_IMG_1369.JPG" alt="Særlig aften">
            </div>
        </section>

        

        <!-- Kærlighedsbrev sektion -->
        <section class="love-note">
            <h2>❤️Penis Pige❤️</h2>
            <p>Kære Kathrine,</p>
            <p>Vi har nu været kærester i FIRE!! år, what! Det er jo helt skørt...</p>
            <p>Jeg er ret sikker på at du nu, er det menneske jeg har tilbragt mest tid med.</p>
            <p>Du er i hvert fald det menneske der kender mig bedst,</p>
            <p>Og det menneske som jeg føler at jeg kender bedst;</p>
            <p>Både de gode sider, og de mindre gode.</p>
            <p>Men jeg synes at det er utroligt smukt, at to personer på den måde kan blive en del af hinanden.</p>
            <p>En del af hinanden, som jeg føler at vi er. To personer der har brug for hinanden, for at være hele</p>
            <p>Jeg tænker tit på hvad jeg skulle gøre uden dig, og jeg ved det ærligt talt ikke...</p>
            <p>Jeg elsker dig utroligt højt, din søde stemme og smukke ansigt er ofte det eneste der kan give mig glæde.</p>
            <p>Jeg er ked af at vi skændes og gør hinanden kede af det nogle gange, men så tænker jeg på the notebook, </p>
            <p>De var også sådan, og det gik ret godt aligevel...</p>
            <p>Jeg elsker dig min søde pige❤️ Jeg er lykkelig over at have brugt de sidste fire år sammen med dig.</p>
            <p>Jeg ser frem til at opleve flere at livetes op og nedture, så længe det er sammen med dig.</p>
            <p>Kærlig hilsen </p>
            <p>Mathullemand A Zimmer❤️  </p>



        </section>

         <!-- Knap til video-pop-up -->
         <section class="video-section">
            <button onclick="openVideo()">Anton knap 2 ❤️</button>
        </section>

        <!-- Video-pop-up (modal) -->
        <div class="video-modal" id="videoModal">
            <div class="video-content">
                <span class="close" onclick="closeVideo()">&times;</span>
                <video id="popupVideo" controls>
                    <source src="20210514_132739_6e63bb68375d9dae8c36c60c7d50c817.MOV" type="video/mp4">
                    Din browser understøtter ikke video-afspilleren.
                </video>
            </div>
        </div>

        <!-- Footer -->
        <footer>
            <p>Tak for de fire år, min skat. ❤️</p>
        </footer>
    </div>
    <script src="script.js"></script>
</body>
</html>
