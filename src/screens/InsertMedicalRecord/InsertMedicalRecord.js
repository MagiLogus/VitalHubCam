import { InputWithTitle } from "../../components/InputWithTitle/InputWithTitle";
import { ButtonMedicalRecord, ButtonMedicalRecordEdit, ButtonTitle, Container, ContentLinkCenter, ContentTextMedicalRecord, LinkBlueMontserratMargin, ScrollForm, TextGrayModalPatient, TitleMedicalRecord } from "./Style";
import { InputWithTitleMedium } from "../../components/InputWithTitleMedium/InputWithTitleMedium";
import { InsertMedicalRecordImage } from "../../components/InsertMedialRecordImage/InsertMedialRecordImage";

export function InsertMedicalRecord() {
    return (
        <Container>
            <InsertMedicalRecordImage/>
            <TitleMedicalRecord>Paulo Henrique</TitleMedicalRecord>

            <ContentTextMedicalRecord>
                <TextGrayModalPatient>26 Anos</TextGrayModalPatient>
                <TextGrayModalPatient>paulo.oliveira@gmail.com</TextGrayModalPatient>
            </ContentTextMedicalRecord>
            <ScrollForm showsVerticalScrollIndicator={false}>
                <InputWithTitle title={"Descrição da consulta"} placeholder={"Descrição"} />
                <InputWithTitleMedium title={"Diagnóstico do paciente"} placeholder={"Diagnóstico"} />
                <InputWithTitle title={"Prescrição médica"} placeholder={"Prescrição"} />

                <ButtonMedicalRecord style={{ width: "90%" }}>
                    <ButtonTitle>Salvar</ButtonTitle>
                </ButtonMedicalRecord>

                <ButtonMedicalRecordEdit style={{ width: "90%"}}>
                    <ButtonTitle>Editar</ButtonTitle>
                </ButtonMedicalRecordEdit>

                <ContentLinkCenter>
                    <LinkBlueMontserratMargin>Cancelar</LinkBlueMontserratMargin>
                </ContentLinkCenter>
            </ScrollForm>
        </Container>

    );
};