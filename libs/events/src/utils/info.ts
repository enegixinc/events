import { ComponentInternalInstance, getCurrentInstance } from 'vue';

export class VueInfo {
  private instance: ComponentInternalInstance | null;

  constructor() {
    this.instance = getCurrentInstance();
  }

  get filePath() {
    return this.instance?.type.__file;
  }

  get componentName() {
    return this.instance?.type.__name;
  }
}
