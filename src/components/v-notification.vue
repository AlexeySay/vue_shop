<template>
  <div class="v-notification">
        <transition-group name="v-notification-animate">
            <div 
                class="v-notification__content" 
                v-for="message in messages"
                :key="message.id" 
                :class="message.bgc"> 

                <div class="content__text">
                    <span>{{ message.name }}</span>
                    <span>{{ message.icon }}</span>
                </div>

            </div>
        </transition-group>
        

  </div>
</template>

<script>
export default {
    name: "v-notification",
    props: {
        messages: {
            type: Array,
            default: () => {
                return []
            }
        },
        rightButton: {
            type: String,
            default: ''
        },
        leftButton: {
            type: String,
            default: ''
        },
        timeout: {
            type: Number,
            default: 3000
        }
    },
    data() {
        return{}
    },
    methods: {
        hidenotification() {
            let vm = this
            if (vm.messages.length) {
                setTimeout(function() {
                    vm.messages.splice(vm.messages.length - 1, 1)
                }, this.timeout)
            }
        }
    },
    watch: {
        messages() {
            this.hidenotification()
        }
    }
}
</script>

<style lang="scss">
.v-notification {
    position: fixed;
    top: 80px;
    right: 16px;
    z-index: 10;
    display: flex;
    flex-direction: column-reverse;
    &__content {
        padding: 1vw 2vw;
        border-radius: 4px;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto 16px;
        font-size: 1.4vw;
        &.add {
            background: #1f9c3a;
        }
        &.remove {
            background: #e23d;
        }
        .content__text {
            display: flex;
            align-items: center;
            > *{
                margin: 0 2px;
            }
        }
    }
}
.v-notification-animate {
    &-move{
        transition: transform .6s ease;
    }
    &-enter {
        transform: translateX(120px);
        opacity: 0;
    }
    &-enter-active {
        transition: .6s ease;
    }
    &-enter-to {
        opacity: 1;
    }
    &-leave {
        height: 50px;
        opacity: 1;
    }
    &-leave-active {
        transition: transform .6s ease, opacity .6s linear;
    }
    &-leave-to {
        transform: translateX(120px);
        opacity: 0;
    }
}
@media(max-width: 650px) {
    .content__text {
        font-size: 10px;
        padding: 1vw 2vw;
    }
}
@media(max-width: 460px) {
    .content__text {
        font-size: 10px;
        padding: 1vw 2vw;
    }
}
</style>