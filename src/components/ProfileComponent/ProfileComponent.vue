<template>
    <div class="profile-container">
        <span class="blur-background"></span>
        <div class="profile-wrapper">
            <h4>Your profile:</h4>
            <table>
                <tr class="photo-row">
                    <td class="first-column">Photo:</td>
                    <td><img  src="https://cdn-icons.flaticon.com/png/512/552/premium/552909.png?token=exp=1640122029~hmac=b9acffd82dda71cb658daab06220261f"  alt=""></td>
                </tr>
                <tr>
                    <td class="first-column">Name:</td>
                    <td>Alejandro Sandí</td>
                </tr>
                <tr>
                    <td class="first-column" >Email:</td>
                    <td>alesf22@gmail.com</td>
                </tr>
                <tr>
                    <td class="first-column">Password:</td>
                    <td>*********</td>
                </tr>
                <tr>
                    <td></td>
                    <td><button class="edit-button">Edit</button></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileComponent'
}
</script>

<style lang="scss" src="./ProfileComponent.scss"></style>