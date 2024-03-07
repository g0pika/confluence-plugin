package com.view26.test;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import org.springframework.stereotype.Component;
import com.atlassian.plugin.spring.scanner.annotation.imports.ComponentImport;

import static com.google.common.base.Preconditions.checkNotNull;

@Component
public final class ViewServlet extends HttpServlet {
    private final ViewService viewService;

    public ViewServlet(ViewService viewService) {
        this.viewService = checkNotNull(viewService);
    }
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        final PrintWriter writer = res.getWriter();
        writer.write("<h1>Views</h1>");
    
        // Display existing views
        writer.write("<ul>");
    
        List<View> views = viewService.getAllViews();
        for (View view : views) {
            writer.printf("<li>%s</li>", view.getName());
        }
    
        writer.write("</ul>");
    
        // Form to add a new view
        writer.write("<form method=\"post\">");
        writer.write("<label for=\"viewName\">View Name:</label>");
        writer.write("<input type=\"text\" name=\"viewName\" id=\"viewName\" required/>");
        writer.write("<br>");
        writer.write("<input type=\"submit\" name=\"submit\" value=\"Add View\"/>");
        writer.write("</form>");
    
        writer.close();
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        String viewName = req.getParameter("viewName");

        if (viewName != null && !viewName.isEmpty()) {
            viewService.addView(viewName, "owner");
        }

        res.sendRedirect(req.getContextPath() + "/your-views-path");
    }
}