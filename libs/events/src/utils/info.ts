import { ComponentInternalInstance, getCurrentInstance } from 'vue';
import { ErrorStack } from '../stack';

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

  get metaData() {
    const stack = new ErrorStack();
    return stack.callerMetaData;
  }
}
