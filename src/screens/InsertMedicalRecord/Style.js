import styled from "styled-components"

export const ScrollForm = styled.ScrollView`
    height: 90%;
    width: 100%;
`

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 44;
    
    background-color: #496BBA;
    border-radius: 5px;
    
    justify-content: center;
    align-items: center;
    margin-top: 15;
`

export const ButtonMedicalRecord = styled(Button)`
    width: 100%;
    margin-top: 10px;
    align-self: center;
`

export const ButtonMedicalRecordEdit = styled(ButtonMedicalRecord)`
    margin-top: 30px;
    background-color: rgba(73, 107, 186, 0.33);
`
export const ButtonTitle = styled.Text`
    color: #FFFFFF;
    font-family: 'MontserratAlternates_700Bold';
    font-size: 16;
    text-align: center;
    text-transform: uppercase;
`

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #FAFAFA;
`

export const ContentLinkCenter = styled.View`
    width: 100%;
    align-items: center;
`

export const ContentTextModalPatient = styled.View`
    flex-direction: row;
    width: 100%;
    gap: 20px;
    justify-content: center;

    margin-top: 12px;
`
export const ContentTextMedicalRecord = styled(ContentTextModalPatient)`
    margin: 0px 0px 24px 0px;
`
export const TitleWithInput = styled.Text`
    font-family: "Quicksand_600SemiBold";
    font-size: 16px;
    margin-bottom: 10px;
`

export const TextAccount = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14;
    margin-left: 5;
`

export const LinkBlueMontserrat = styled(TextAccount)`
    color: #4D659D;
    text-decoration: underline;
`

export const LinkBlueMontserratMargin = styled(LinkBlueMontserrat)`
    margin-top: 30px;
`

export const TextGray = styled.Text`
    font-family: "Quicksand_500Medium";
    font-size: 16px;
    text-align: center;
    color: #5F5C6B;
    margin: 10px 0px 5px 0px;
`

export const TextBlueEmail = styled(TextGray)`
    margin: 0px;
    font-family: "Quicksand_600SemiBold";
    color: #496BBA;
`

export const TextGrayCreateAccount = styled(TextGray)`
    margin: 5px;
`

export const TextGrayCancelModal = styled(TextGray)`
    color: #4E4B59;
`

export const TextGrayModalPatient = styled(TextGray)`
    font-size: 14px;
`

export const Title = styled.Text`
    font-size: 20px;
    color: #33303e;
    font-family: "MontserratAlternates_600SemiBold";
    margin-bottom: 5px;
`

export const TitleMedicalRecord = styled(Title)`
    margin: 20px 0px 10px 0px;
`