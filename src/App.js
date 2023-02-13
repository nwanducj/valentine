import React from "react";
import "./App.css";

import colors from "./utils/colors";
import Screen from "./components/Screen";

import ursinho_estudando from "./assets/ursinho_estudando.gif";
import pandinha_brava from "./assets/pandinha_fofa_cara_de_brava.gif";
import pandinha from "./assets/pandinha.gif";
import ursinho_S2_pandinha from "./assets/ursinho_S2_pandinha.gif";
import ursinha_chorando from "./assets/ursinha_chorando.gif";
import ursinho_chorando from "./assets/ursinho_chorando.gif";
import pandinha_martelo from "./assets/pandinha_martelo.png";
import ursinho_catucando_pandinha from "./assets/ursinho_catucando_pandinha.gif";
import ursinho_coracao from "./assets/ursinho_coracao.jpg";
import pandinha_coracao from "./assets/pandinha_coracao.gif";
import ursinhos_apaixonados from "./assets/ursinhos_apaixonados.gif";
import ursinhos_caminhada from "./assets/ursinhos_caminhada.jpg";
import ursinhos_fotinha from "./assets/5.jpg";
import ursinhos_bebida from "./assets/drink.JPG";
import ursinha_mordidas from "./assets/ursinha_mordidas.gif";
import ursinho_pegando_no_sono from "./assets/ursinho_pegando_no_sono.gif";
import ursinhos_dormindo from "./assets/ursinhos_dormindo.gif";
import eddyS2Lidiane from "./assets/1.png";
import two from "./assets/4.png";

const App = () => {

  return (
    <div className="main">
      <Screen
        imageUrl={two}
        bgColor={colors.red}
        textColor={colors.white}
        Spaghetti and Meatball
        title="This is Spaghetti and Meatball"
        text="Once upon a time, in a quaint Italian kitchen, lived Spaghetti and Meatball. They had been friends for as long as they could remember, but their relationship had recently evolved into something more. They were now dating and were the talk of the kitchen."
        btnText="Start story"
        sequency="1"
      />
      <Screen
        imageUrl={ursinho_estudando}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Spaghetti"
        text="Spaghetti was always the jester, making Meatball laugh with his antics, but sometimes he was a bit insensitive and didn't always understand what Meatball was trying to say."
        btnText="Continue"
        sequency="2"
      />
      <Screen
        imageUrl={pandinha}
        bgColor={colors.pink}
        textColor={colors.white}
        title="Meatball"
        text="Meatball, on the other hand, was always concerned about how close she was to Spaghetti, but lacked patience and sometimes got irritated with Spaghetti's lack of sensitivity."
        btnText="Continue"
        sequency="3"
      />
      <Screen
        imageUrl={ursinho_S2_pandinha}
        bgColor={colors.red}
        textColor={colors.white}
        title="Spaghetti & Meatball"
        text="Despite their differences, the two were deeply in love and always helped each other through the ups and downs of their relationship."
        btnText="Continue"
        sequency="4"
      />
      <Screen
        imageUrl={ursinha_chorando}
        bgColor={colors.purple}
        textColor={colors.white}
        title="Meatball sad"
        text="There were times when Meatball was sad and needed a shoulder to cry on, and Spaghetti was always there to cheer her up"
        btnText="Continue"
        sequency="5"
      />
      <Screen
        imageUrl={ursinho_chorando}
        bgColor={colors.green}
        textColor={colors.white}
        title="Spaghetti sad"
        text="And there were times when Spaghetti was feeling down, and Meatball was there to comfort him even when she does not know she is doing it."
        btnText="Continue"
        sequency="6"
      />
      <Screen
        imageUrl={pandinha_martelo}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Spaghetti insensitive"
        text="Spaghetti is insensitive and sometimes doesn't understand what Meatball meant exactly or how she felt, and understands totally different."
        btnText="Continue"
        sequency="7"
      />
      <Screen
        imageUrl={pandinha_brava}
        bgColor={colors.yellow}
        textColor={colors.white}
        title="Meatball and his patience"
        text="Meatball is VERY LOVING, but the same lack of patience... and sometimes she gets irritated because Spaghetti insensitivity."
        btnText="Continue"
        sequency="8"
      />
      <Screen
        imageUrl={ursinho_catucando_pandinha}
        bgColor={colors.purple}
        textColor={colors.white}
        title="Spaghetti insistence"
        text="Meatball doesn't like to be direct, so Spaghetti will pester Meatball until she talks..."
        btnText="Continue"
        sequency="9"
      />
      <Screen
        imageUrl={ursinho_coracao}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Spaghetti's Love"
        text="Then Spaghetti, after hours of trying to explain, apologizes for being insensitive and says how much he loves Meatball."
        btnText="Awwwwn <3"
        sequency="10"
      />
      <Screen
        imageUrl={pandinha_coracao}
        bgColor={colors.yellow}
        textColor={colors.white}
        title="Meatball's love"
        text="Then Meatball behind all her lack of patience also loves Spaghetti, and goes on to say that she loves him too."
        btnText="Awwwwn <3"
        sequency="11"
      />
      <Screen
        imageUrl={ursinhos_apaixonados}
        bgColor={colors.red}
        textColor={colors.white}
        title="After that..."
        text="After everything is resolved, the two are fine and happy... and do many things together like the friends and lovers that they are."
        btnText="Continue"
        sequency="12"
      />
      <Screen
        imageUrl={ursinhos_caminhada}
        bgColor={colors.pink}
        textColor={colors.white}
        title="they go out together"
        text="The couple loved to go for walks together, and would spend hours laughing and enjoying each other's company."
        btnText="Walking..."
        sequency="13"
      />
      <Screen
        imageUrl={ursinhos_fotinha}
        bgColor={colors.green}
        textColor={colors.white}
        title="Today they take pictures together"
        text="Meatball wants to look perfect in the photos, she always asks Spaghetti to take it again ~ laughs"
        btnText="More pics..."
        sequency="14"
      />
      <Screen
        imageUrl={ursinhos_bebida}
        bgColor={colors.purple}
        textColor={colors.white}
        title="drink together"
        text="Spaghetti and Meatball love to drink together, they also loved to drink together and sing along to their favorite songs. Burna Boy & Doja Cat(or something)"
        btnText="drinks after..."
        sequency="15"
      />
      <Screen
        imageUrl={ursinha_mordidas}
        bgColor={colors.blue}
        textColor={colors.white}
        title="The Meatball is playing with Spaghetti"
        text="Looks like fun looking like this hahaha ... for the Meatball of course ... look at poor Spaghetti, look at the Meatball face! ~ poor_people"
        btnText="Bites after..."
        sequency="16"
      />
      <Screen
        imageUrl={ursinho_pegando_no_sono}
        bgColor={colors.purple}
        textColor={colors.white}
        title="at night"
        text="But every day, when the Spaghetti can't wait longer than agreed talking with Meatball, Meatball always want to talk more."
        btnText="Naps later..."
        sequency="17"
      />
      <Screen
        imageUrl={ursinhos_dormindo}
        bgColor={colors.blue}
        textColor={colors.white}
        title="And finally we sleep"
        text="I saw them have difficult moments sometimes, and cry, and were irritated... but when everyone is out of their place, they love each other a lot and laugh"
        btnText="They sleep"
        sequency="18"
      />
      <Screen
        imageUrl={eddyS2Lidiane}
        bgColor={colors.pink}
        textColor={colors.white}
        title="Happy Valentine's Day"
        text="Finally I thought of something that no one has ever given you and I have never given anyone... I hope you like it. I love you Elvina Baby like I never loved anyone... ~ Odogwu"
        btnText="End"
        sequency="19"
      />
    </div>
  );
};

export default App;
