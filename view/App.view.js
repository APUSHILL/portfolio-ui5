sap.ui.define([
    "sap/ui/core/mvc/View",
    "sap/m/App",
    "sap/m/Page",
    "sap/f/DynamicPage",
    "sap/f/DynamicPageTitle",
    "sap/f/DynamicPageHeader",
    "sap/m/VBox",
    "sap/m/HBox",
    "sap/m/Text",
    "sap/m/Title",
    "sap/m/Button",
    "sap/m/Avatar",
    "sap/m/Panel",
    "sap/m/List",
    "sap/m/StandardListItem",
    "sap/m/ObjectListItem",
    "sap/m/ObjectAttribute",
    "sap/m/ObjectStatus",
    "sap/ui/layout/Grid",
    "sap/ui/layout/GridData",
    "sap/m/Card",
    "sap/f/cards/Header",
    "sap/f/cards/NumericHeader",
    "sap/m/FlexBox",
    "sap/m/Token",
    "sap/m/Tokenizer",
    "sap/m/MessageStrip",
    "sap/m/Link",
    "sap/ui/core/Icon",
    "sap/m/ScrollContainer"
], function (View, App, Page, DynamicPage, DynamicPageTitle, DynamicPageHeader, VBox, HBox, Text, Title, Button, Avatar, Panel, List, StandardListItem, ObjectListItem, ObjectAttribute, ObjectStatus, Grid, GridData, Card, Header, NumericHeader, FlexBox, Token, Tokenizer, MessageStrip, Link, Icon, ScrollContainer) {
    "use strict";

    return View.extend("portfolio.view.App", {
        getControllerName: function () {
            return "portfolio.controller.App";
        },

        createContent: function () {
            var oApp = new App("portfolioApp");
            var oPage = this._createMainPage();
            oApp.addPage(oPage);
            return oApp;
        },

        _createMainPage: function () {
            var oPage = new DynamicPage("mainPage", {
                title: this._createDynamicPageTitle(),
                header: this._createDynamicPageHeader(),
                content: this._createMainContent(),
                footer: this._createFooter()
            });
            return oPage;
        },

        _createDynamicPageTitle: function () {
            return new DynamicPageTitle({
                heading: new Title({
                    text: "{portfolio>/personal/name}",
                    level: "H1"
                }),
                subHeading: new Text({
                    text: "{portfolio>/personal/title}"
                }),
                actions: [
                    new Button({
                        text: "Download Resume",
                        type: "Emphasized",
                        icon: "sap-icon://download"
                    }),
                    new Button({
                        text: "Contact",
                        type: "Default",
                        icon: "sap-icon://email"
                    })
                ]
            });
        },

        _createDynamicPageHeader: function () {
            var oContactInfo = new VBox({
                items: [
                    new HBox({
                        items: [
                            new Icon({ src: "sap-icon://phone", size: "1rem" }).addStyleClass("sapUiSmallMarginEnd"),
                            new Link({ text: "{portfolio>/personal/phone}", href: "tel:{portfolio>/personal/phone}" })
                        ]
                    }).addStyleClass("sapUiSmallMarginBottom"),
                    new HBox({
                        items: [
                            new Icon({ src: "sap-icon://email", size: "1rem" }).addStyleClass("sapUiSmallMarginEnd"),
                            new Link({ text: "{portfolio>/personal/email}", href: "mailto:{portfolio>/personal/email}" })
                        ]
                    }).addStyleClass("sapUiSmallMarginBottom"),
                    new HBox({
                        items: [
                            new Icon({ src: "sap-icon://chain-link", size: "1rem" }).addStyleClass("sapUiSmallMarginEnd"),
                            new Link({ text: "GitHub", href: "{portfolio>/personal/github}", target: "_blank" }),
                            new Text({ text: " | " }),
                            new Link({ text: "LinkedIn", href: "{portfolio>/personal/linkedin}", target: "_blank" })
                        ]
                    })
                ]
            });

            return new DynamicPageHeader({
                content: new HBox({
                    items: [
                        new Avatar({
                            displaySize: "L",
                            initials: "AKS",
                            backgroundColor: "Accent1"
                        }).addStyleClass("sapUiLargeMarginEnd"),
                        new VBox({
                            items: [
                                new Text({
                                    text: "{portfolio>/objective}"
                                }).addStyleClass("sapUiMediumMarginBottom"),
                                oContactInfo
                            ]
                        })
                    ]
                })
            });
        },

        _createMainContent: function () {
            return new ScrollContainer({
                height: "100%",
                vertical: true,
                content: new VBox({
                    items: [
                        this._createStatsSection(),
                        this._createEducationSection(),
                        this._createExperienceSection(),
                        this._createProjectsSection(),
                        this._createSkillsSection(),
                        this._createCertificationsSection(),
                        this._createAchievementsSection()
                    ]
                }).addStyleClass("sapUiContentPadding")
            });
        },

        _createStatsSection: function () {
            return new Panel({
                headerText: "Quick Stats",
                content: new Grid({
                    defaultSpan: "XL4 L4 M6 S12",
                    content: {
                        path: "portfolio>/stats",
                        template: new Card({
                            header: new NumericHeader({
                                title: "{portfolio>title}",
                                number: "{portfolio>value}",
                                state: "Good"
                            })
                        }).addStyleClass("sapUiMediumMargin")
                    }
                })
            }).addStyleClass("sapUiLargeMarginBottom");
        },

        _createEducationSection: function () {
            return new Panel({
                headerText: "Education",
                content: new List({
                    items: {
                        path: "portfolio>/education",
                        template: new ObjectListItem({
                            title: "{portfolio>degree}",
                            number: "{portfolio>period}",
                            attributes: [
                                new ObjectAttribute({
                                    title: "Institution",
                                    text: "{portfolio>institution}"
                                }),
                                new ObjectAttribute({
                                    title: "Grade",
                                    text: "{portfolio>grade}"
                                })
                            ],
                            firstStatus: new ObjectStatus({
                                text: "{portfolio>type}",
                                state: "{portfolio>type}"
                            })
                        })
                    }
                })
            }).addStyleClass("sapUiLargeMarginBottom");
        },

        _createExperienceSection: function () {
            return new Panel({
                headerText: "Professional Experience",
                content: new VBox({
                    items: [
                        new ObjectListItem({
                            title: "{portfolio>/experience/position}",
                            number: "{portfolio>/experience/period}",
                            attributes: [
                                new ObjectAttribute({
                                    title: "Company",
                                    text: "{portfolio>/experience/company}"
                                })
                            ]
                        }),
                        new List({
                            items: {
                                path: "portfolio>/experience/responsibilities",
                                template: new StandardListItem({
                                    title: "{portfolio>}",
                                    icon: "sap-icon://bullet-text"
                                })
                            }
                        }).addStyleClass("sapUiMediumMarginTop")
                    ]
                })
            }).addStyleClass("sapUiLargeMarginBottom");
        },

        _createProjectsSection: function () {
            return new Panel({
                headerText: "Projects",
                content: new Grid({
                    defaultSpan: "XL6 L6 M12 S12",
                    content: {
                        path: "portfolio>/projects",
                        template: new Card({
                            header: new Header({
                                title: "{portfolio>title}",
                                subtitle: "{portfolio>period}"
                            }),
                            content: new VBox({
                                items: [
                                    new Text({
                                        text: "{portfolio>description}"
                                    }).addStyleClass("sapUiMediumMarginBottom"),
                                    new Tokenizer({
                                        tokens: {
                                            path: "portfolio>technologies",
                                            template: new Token({
                                                text: "{portfolio>}"
                                            })
                                        }
                                    }).addStyleClass("sapUiMediumMarginBottom"),
                                    new Link({
                                        text: "View on GitHub",
                                        href: "{portfolio>github}",
                                        target: "_blank"
                                    })
                                ]
                            }).addStyleClass("sapUiContentPadding")
                        }).addStyleClass("sapUiMediumMargin")
                    }
                })
            }).addStyleClass("sapUiLargeMarginBottom");
        },

        _createSkillsSection: function () {
            return new Panel({
                headerText: "Skills & Technologies",
                content: new Grid({
                    defaultSpan: "XL6 L6 M6 S12",
                    content: [
                        this._createSkillCategory("Technical Skills", "portfolio>/skills/technical"),
                        this._createSkillCategory("Tools", "portfolio>/skills/tools"),
                        this._createSkillCategory("Libraries/Frameworks", "portfolio>/skills/libraries"),
                        this._createSkillCategory("Soft Skills", "portfolio>/skills/soft")
                    ]
                })
            }).addStyleClass("sapUiLargeMarginBottom");
        },

        _createSkillCategory: function (title, path) {
            return new Panel({
                headerText: title,
                content: new Tokenizer({
                    tokens: {
                        path: path,
                        template: new Token({
                            text: "{portfolio>}"
                        })
                    }
                }).addStyleClass("sapUiContentPadding")
            }).addStyleClass("sapUiMediumMargin");
        },

        _createCertificationsSection: function () {
            return new Panel({
                headerText: "Certifications",
                content: new List({
                    items: {
                        path: "portfolio>/certifications",
                        template: new StandardListItem({
                            title: "{portfolio>title}",
                            description: "{portfolio>description}",
                            info: "{portfolio>provider}",
                            infoState: "Information",
                            icon: "sap-icon://certificate"
                        })
                    }
                })
            }).addStyleClass("sapUiLargeMarginBottom");
        },

        _createAchievementsSection: function () {
            return new Panel({
                headerText: "Achievements",
                content: new List({
                    items: {
                        path: "portfolio>/achievements",
                        template: new StandardListItem({
                            title: "{portfolio>title}",
                            description: "{portfolio>description}",
                            icon: "sap-icon://award"
                        })
                    }
                })
            }).addStyleClass("sapUiLargeMarginBottom");
        },

        _createFooter: function () {
            return new HBox({
                justifyContent: "Center",
                alignItems: "Center",
                items: [
                    new Text({
                        text: "© 2024 Arpan Kumar Shill. All rights reserved."
                    })
                ]
            }).addStyleClass("sapUiContentPadding");
        }

    });
});