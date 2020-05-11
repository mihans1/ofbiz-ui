import { AgentService } from '../../../service/agent-service';
import { inject } from 'aurelia-framework';

@inject(AgentService)
export class ListView {
  constructor(agentService) {
    this.agentService = agentService;
  }

  attached() {
    this.agentService.getAgents()
      .then(
        data => this.agents = data
      );
  }
  deleteAgent(id, index) {
    this.agents.splice(index, 1);
    this.agentService.deleteAgentById(id);
  }
}

