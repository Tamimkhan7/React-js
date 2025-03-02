import React from "react";

class button extends React.Component {
    // shouldcomponentUpdate use kore  ami check korte pari amar nextprops and currentprops same kina

    shouldComponentUpdate(nextprops) {
        //rename, first a name thake oita ke rename korte hole first a colon use korte hobe then rename ta 
        const { change: currentprops, locale: currentlocale } = this.props;
        const { change: nextprops, locale: nextlocale } = nextprops;
        if (currentprops === nextprops && currentlocale === nextlocale) return false;
        else return true;
    }

    render() {
        const { change } = this.props;
        return (
            <button type="button" onClick={change}>Click here</button>
        )
    }
}

export default button;