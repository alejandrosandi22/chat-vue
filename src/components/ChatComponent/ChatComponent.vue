<template>
    <div class="chat-container">
        <span class="blur-background"></span>
        <div class="chat-wrapper">
            <div class="contacts">
                <h2>Contacts</h2>
                <div class="">

                </div>
            </div>
            <div class="message">
                <div class="actual-contact">
                    <img src="https://cdn-icons.flaticon.com/png/512/552/premium/552909.png?token=exp=1640122029~hmac=b9acffd82dda71cb658daab06220261f" alt="profile">
                    <div>
                        <h2>Contacto Actual</h2>
                        <h3>email@gmail.com</h3>
                    </div>
                </div>
                <div class="input-text">
                    <input type="text" placeholder="Message">
                    <span class="send"><i class="far fa-paper-plane"></i></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChatComponent',
}
</script>

<style lang="scss" src="./ChatComponent.scss"></style>