import React from "react";

export const LanguageContext = React.createContext();

export class LanguageProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLang: "id"
        };
    }

    changeLang = lang => {
        this.setState({ selectedLang: lang });
    };

    render() {
        return (
            <LanguageContext.Provider value={{ whichLanguage: this.state.selectedLang, changeLang: this.changeLang }}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}