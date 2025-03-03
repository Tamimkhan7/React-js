import React from "react";

class button extends React.Component {

    shouldComponentUpdate(nextprops) {
        const { change: currentprops, locale: currentlocale } = this.props;
        const { change: nextprops, locale: nextlocale } = nextprops;
        if (currentprops === nextprops && currentlocale === nextlocale) return false;
        else return true;
    }

    render() {
        const { change, locale, show, enable } = this.props;
        if (!enable) return null;
        return (
            <>
                <button type="button" onClick={change}>
                    {locale === 'bn-BD' ? 'Change Clock' : 'ঘড়ি পরিবর্তন করুন'}
                </button>
                {/* ?similar use case, because amra akta ternary operator use kore pelci bola jay: jodi amar show true hoy tahole p tag return koro otherwise return koro na */}
                {show && <p>Hello</p>}
            </>
        );
    }
}

export default button;