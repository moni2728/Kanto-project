const expect = require('chai').expect;

describe('Edit Profile', () => {
    it('Realizar cambios en edit profile', async () => { 
        const buttonCancel = await $('//android.widget.Button[@resource-id="cm.aptoide.pt:id/negative_button"]')
        const buttonOpen = await $('//android.widget.Button[@resource-id="cm.aptoide.pt:id/appview_install_button"]')
        const buttonProfile = await $('//android.widget.FrameLayout[@content-desc="My Profile"]')
        const buttonEditProfile = await $('//android.widget.LinearLayout[@resource-id="com.karaokesmart:id/followLayout"]')
        const kantoName = await $('//android.widget.EditText[@resource-id="com.karaokesmart:id/editName"]')
        const kantoUsername = await $('//android.widget.EditText[@resource-id="com.karaokesmart:id/editUsername"]')
        const kantoBiography = await $('//android.widget.EditText[@resource-id="com.karaokesmart:id/editDescription"]')
        const buttonCheck = await $('//android.widget.ImageView[@resource-id="com.karaokesmart:id/btn_accept"]')
        const buttonExit = await $('//android.widget.ImageView[@resource-id="com.karaokesmart:id/btn_close_dialog"]')
        const buttonChangePhoto = await $('//android.widget.FrameLayout[@resource-id="com.karaokesmart:id/uploadButton"]')

//Realizar cambios en Edit Profile y Guardar
//Verificar boton de Change Photo exista
        await buttonCancel.click();
        await buttonOpen.click();
        await browser.pause(8000);
        await buttonProfile.click();
        await buttonEditProfile.click();
        expect(buttonChangePhoto).to.exist;
        await kantoName.clearValue();
        await kantoName.addValue("Pablo");
        await kantoBiography.clearValue();
        await kantoBiography.addValue("Soy cantante hondureño, de música popular")
        await buttonCheck.click();
        await browser.pause(4000);
        
//Realizar cambios en Edit Profile y Cancelar
        await buttonEditProfile.click();
        expect(buttonChangePhoto).to.exist;
        await kantoName.clearValue();
        await kantoName.addValue("Juan");
        await kantoUsername.clearValue();
        await kantoUsername.addValue("Polachito")
        await kantoBiography.clearValue();
        await kantoBiography.addValue("Soy cantante, de música trova")
        await buttonExit.click();
        await browser.pause(4000);
      
    })
 
})
