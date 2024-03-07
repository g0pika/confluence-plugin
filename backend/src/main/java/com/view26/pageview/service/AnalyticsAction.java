package com.view26.pageview.service;

import com.atlassian.confluence.core.ConfluenceActionSupport;
import com.opensymphony.xwork.Action;


public class AnalyticsAction extends ConfluenceActionSupport {
    @Override
    public String execute() throws Exception {
        addActionMessage("Added an action message");
        return Action.SUCCESS;
    }

  
}
