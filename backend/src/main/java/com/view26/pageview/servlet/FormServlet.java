package com.view26.pageview.servlet;

import com.atlassian.plugin.spring.scanner.annotation.imports.ComponentImport;
import com.atlassian.soy.renderer.SoyTemplateRenderer;
import org.springframework.stereotype.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.view26.pageview.service.ResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import javax.servlet.*;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.io.ByteArrayOutputStream;
import java.nio.charset.StandardCharsets;
import com.atlassian.confluence.content.render.xhtml.Streamable;
import java.io.StringWriter;
import javax.inject.Named;
import javax.inject.Inject;


@Named("MyServlet")
@Component
public class FormServlet extends HttpServlet{
    private static final Logger log = LoggerFactory.getLogger(FormServlet.class);

    @ComponentImport
    private final SoyTemplateRenderer soyTemplateRenderer;

    @Autowired
    public FormServlet (@ComponentImport  SoyTemplateRenderer soyTemplateRenderer) {

        this.soyTemplateRenderer = soyTemplateRenderer;
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException
    {
    
        Map<String, Object> map = new HashMap<>();
        map.put("contextPath", req.getContextPath());

        String html  = soyTemplateRenderer.render( "com.view26.pageview:jira-react-atlaskit-resources", "servlet.ui.form", map);



        resp.setContentType("text/html");
        resp.getWriter().write(html);
        resp.getWriter().close();    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        StringBuffer jb = new StringBuffer();
        String line = null;
        try {
            BufferedReader reader = req.getReader();
            while ((line = reader.readLine()) != null)
                jb.append(line);
        } catch (Exception e) { /*report an error*/ }
        log.info(String.format("Post Data: %s", jb.toString()));


        Map<String, Object> map = new HashMap<>();
        map.put("contextPath", req.getContextPath());

        String html =  soyTemplateRenderer.render("com.view26.pageview:jira-react-atlaskit-resources", "servlet.ui.form", map);


        resp.setContentType("text/html");
        resp.getWriter().write(html);
        resp.getWriter().close();
    }


}