import React from "react";

import { ProcessPageLayout } from "components/ProcessPageLayout";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { PageContainer } from "components/PageContainer";
import { AccountCard } from "features/account/components/AccountCard";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";
import { ListOptions } from "features/account/components/ListOptions";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { Divider } from "@material-ui/core";

import buttonBg from "_assets/icons/buttonBg.svg"
import femaleIcon from "_assets/icons/icn-persona-fem.svg"
import maleIcon from "_assets/icons/icn-persona-mas.svg"
import iconCheck from "_assets/icons/icn-check.svg"
import iconFixed from "_assets/icons/icn-fixado.svg"

import { useStyles } from "./AccountSettings.style";
import  "./AccountSettings.scss";
import "_assets/css/forms/mainform.scss"

export const AccountSettings: React.FC = () =>{
    const style = useStyles();
    return(
        <PageContainer>
            <ProcessPageLayout 
                header={
                    <React.Fragment>
                        <div className="top">
                            <ProcessDescriptionHeader title="Configurações" />
                            <AccountCard 
                                name="Luiza Anada Macêdo"
                                info="Conta 12345-0"
                                icon={femaleIcon}
                                iconRight={iconCheck}
                                bank="Banquinho"
                                height="25"
                            />
                            <Divider />
                            <AccountCard 
                                name="Pedro Victor da Silva"
                                info="Conta 12344-0"
                                icon={maleIcon}
                                iconRight={iconFixed}
                                bank="Bancão"
                                height="21"
                            />
                        </div>
                    </React.Fragment>
                }
                main={
                    <React.Fragment>
                        <div className="form-body">
                            <div className={style.allAccountsButton}>
                                <ButtonWithFloatingIcon icon={buttonBg}>
                                    Ver Todas
                                </ButtonWithFloatingIcon>
                            </div>
                            <ListOptions />
                        </div>
                    </React.Fragment>
                }
                footer={<ProcessPageFooter />}
            />
        </PageContainer>
    ); 
}