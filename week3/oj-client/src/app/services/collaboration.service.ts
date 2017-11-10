import { Injectable } from '@angular/core';

declare var io: any;

@Injectable()
export class CollaborationService {

  collaborationSocket: any;

  constructor() { }

  init(editor: any, sessionId: string) {
    this.collaborationSocket = io(window.location.origin, {query: 'sessionI=d' + sessionId});

    this.collaborationSocket.on("change", (delta: string)=> {
      console.log('collaboration: editor changes by' + delta);
      delta = JSON.parse(delta);
      editor.lastAppliedChange = delta;
      editor.getSession().getDocument().applyDeltas([delta]);
    })

    this.collaborationSocket.on('message', (message) => {
      console.log('received ' + message);
    })
  }

  change(delta: string) {
    this.collaborationSocket.emit("change", delta);
  }

}
