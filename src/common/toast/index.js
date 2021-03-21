import Vue from 'vue';
import VueToast from './toast';
const ToastConstructor = Vue.extend(VueToast);

ToastConstructor.prototype.close = function() {
  this.visible = false;
  this.$el.addEventListener('transitionend', this.destroy.bind(this));
};

ToastConstructor.prototype.destroy = function() {
  this.$destroy(true);
  this.$el.removeEventListener('transitionend', this.destroy);
  this.$el.parentNode.removeChild(this.$el);
};

const Toast = (opts = {}) => {
  let instance = null;
  if (instance) {
    instance.visible = true;
    instance.msg = opts.msg;
    if (instance.timer) {
      clearInterval(instance.timer);
    }
    instance.$el.removeEventListener('transitionend', instance.destroy);
  } else {
    instance = new ToastConstructor().$mount(document.createElement('div'));
    let duration = opts.duration || 2000;
    instance.msg = typeof opts === 'string' ? opts : opts.msg;
    instance.position = opts.position || 'middle';
    document.body.appendChild(instance.$el);
    instance.visible = true;
    Vue.nextTick(() => {
      instance.timer = setTimeout(function() {
        instance.close();
      }, duration);
    });
    return instance;
  }
};

export default  Toast;