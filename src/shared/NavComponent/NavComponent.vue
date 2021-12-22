<template>
    <div class="nav-container">
        <ul>
            <li data-content="profile" ><i class="fas fa-user-circle"></i></li>
            <li data-content="chat" ><i class="far fa-comment-dots"></i></li>
            <li data-content="logout" ><i class="fal fa-sign-out-alt"></i></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NavComponent'
}
</script>

<style lang="scss" src="./NavComponent.scss" ></style>