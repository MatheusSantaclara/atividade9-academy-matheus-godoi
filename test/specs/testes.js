describe("Atividade 9 Testes API Demos", () => {
    afterEach(async() =>{
        driver.reset();
    });
    
describe("App/Alert Dialogs", () => {
    it("Função CANCEL DIALOG WITH MESSAGE", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=two_buttons").click();
        const alert = await $("android.widget.LinearLayout").isDisplayed();
        expect(alert).toBe(true);
        await $('android=new UiSelector().text("OK").className("android.widget.Button")').click();
    });
});

describe("App/Alert Dialogs", () => {
    it("Função LIST DIALOG", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=select_button").click();
        const title = await $('android=new UiSelector().text("Header title").className("android.widget.TextView")').isDisplayed();
        expect(title).toBe(true);
    });
});

describe("App/Alert Dialogs", () => {
    it("Função Hide and Show", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Demonstration of hiding and showing fragments.").className("android.widget.TextView")').click();
        await $("id=frag1hide").click();
        await $("id=frag2hide").click();
        const clickButton1 = await $("id=frag1hide").getText();
        expect(clickButton1).toBe("Show");
        const clickButton2 = await $("id=frag2hide").getText();
        expect(clickButton2).toBe("Show");
    });
});

describe("App/Fragment", () => {
    it("Função DISPLAY_HOME_AS_UP", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_show_home").click();
        const titulo = await $("android.widget.TextView").getText();
        expect(titulo).toBe("App/Action Bar/Display Options");
    });
});

describe("App/Action Bar/Display options", () => {
    it("Função DISPLAY_SHOW_TITLE", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_show_title").click();
        const titulo = await $("android.view.ViewGroup").getText();
        expect(titulo).toBe("");
    });
});

describe("App/Action Bar/Display options", () => {    
    it("Função DISPLAY_SHOW_CUSTOM", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_show_custom").click();
        const botao = await $("android.widget.Button").getText();
        expect(botao).toBe("Custom View!");
    });
});

describe("App/Action Bar/Display options", () => {
    it("Função DISPLAY_SHOW_NAVIGATION", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_navigation").click();
    });
});

});