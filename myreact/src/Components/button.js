import React from "react";

class button extends React.Component {

    shouldComponentUpdate(nextprops) {
        const { change: currentprops, locale: currentlocale } = this.props;
        const { change: nextprops, locale: nextlocale } = nextprops;
        if (currentprops === nextprops && currentlocale === nextlocale) return false;
        else return true;
    }

    render() {
        const { change } = this.props;
        return (
            <button type="button" onClick={change}>
                {locale === 'bn-BD' ? 'Change Clock' : 'ঘড়ি পরিবর্তন করুন'}
            </button>
        );
    }
}

export default button;